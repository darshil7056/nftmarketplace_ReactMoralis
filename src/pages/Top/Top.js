import React, { useEffect, useState } from 'react'
import './Top.css'
import { ethers } from 'ethers'
import axios from 'axios'
import { marketPlaceAddress, ABI } from '../contractAddress'
import Web3Modal from 'web3modal'
import { Loader } from '../../components/Loader/Loader'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Top = () => {
  toast.configure()
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(false)
  const loadNFTs = async () => {
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(marketPlaceAddress, ABI, signer)
    console.log(contract, 'contract')
    const data = await contract.fetchMarketItems()
    if (data) {
      const items = await Promise.all(
        data.map(async (i) => {
          const tokenUri = await contract.tokenURI(i.tokenId)
          console.log(tokenUri)
          const meta = await axios.get(tokenUri)
          let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
          }
          return item
        }),
      )
      setNfts(items)
      setLoading(false)
    }
  }
  const buyNft = async (nft) => {
    try {
      setLoading(true)
      console.log(nft)
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      // Prompt user for account connections
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      const contract = new ethers.Contract(marketPlaceAddress, ABI, signer)
      /* user will be prompted to pay the asking proces to complete the transaction */
      const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      })
      await transaction.wait()
      setLoading(false)
      loadNFTs()
    } catch (error) {
      console.log(error, 'error')
      if (error.code === 4001) {
        setLoading(false)
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 8000,
        })
      } else {
        setLoading(false)
        toast.error(error.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 8000,
        })
      }
    }
  }
  useEffect(() => {
    setLoading(true)
    loadNFTs()
  }, [])
  return (
    <div className="top">
      <div className="topHeader">
        <header>NFT Marketplace</header>
      </div>
      <div className="topContainer">
        {loading ? (
          <Loader />
        ) : nfts.length > 0 ? (
          nfts &&
          nfts.map((item, key) => {
            const { name, description, image, price, tokenId } = item
            return (
              <div className="topCard" key={tokenId}>
                <div className="upperContainer">
                  <img alt="" src={image} />
                </div>
                <div className="lowerContainer">
                  <h3>{name}</h3>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <div className="buyDiv">
                    <div>
                      <span className="priceSpan">
                        Price: <span>{price} ETH</span>
                      </span>
                    </div>
                    <div className="buybtn">
                      <button onClick={() => buyNft(item)}>Buy</button>
                      {/* <button onClick={buyNft(item)}>BUY</button> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <h2>No nfts to sell</h2>
        )}
      </div>
    </div>
  )
}
