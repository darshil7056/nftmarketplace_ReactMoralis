import React, { useEffect, useState } from 'react'
import './ListedNFTs.css'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import { ethers } from 'ethers'
import axios from 'axios'
import Web3Modal from 'web3modal'
import { marketPlaceAddress, ABI } from '../contractAddress'
import { Loader } from '../../components/Loader/Loader'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ListedNFTs = () => {
  toast.configure()
  const [loading, setLoading] = useState(false)
  let history = useHistory()
  const [nfts, setNfts] = useState([])
  const loadNFTs = async () => {
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const contract = new ethers.Contract(marketPlaceAddress, ABI, signer)
    const data = await contract.fetchItemsListed()
    console.log(data, 'data')

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await contract.tokenURI(i.tokenId)
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
    console.log(items, 'items')

    setNfts(items)

    // setLoadingState('loaded')
  }
  useEffect(() => {
    loadNFTs()
  }, [])
  console.log(nfts.length, 'Asdad')

  const withdrawNFT = async (tokenId) => {
    setLoading(true)
    try {
      // alert(tokenId)
      // console.log(tokenId, '>>>>>>')
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      // Prompt user for account connections
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      console.log('Account:', await signer.getAddress())

      // const price = ethers.utils.parseUnits(user.price, 'ether')
      let contract = new ethers.Contract(marketPlaceAddress, ABI, signer)
      let listingPrice = await contract.getListingPrice()
      listingPrice = listingPrice.toString()
      let transaction = await contract.withdrawItemsListed(tokenId, {
        value: listingPrice,
      })
      await transaction.wait()
      toast.success('NFT Withdrawn Successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 8000,
      })
      history.push('/collection')
      console.log(transaction, 'Testing')
    } catch (error) {
      toast.error(error.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 8000,
      })
    }
  }

  return (
    <div className="listedItems">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="listednftCard">
            <header>Listed NFTs</header>
          </div>
          <div className="listedItemsWrappper">
            {nfts.length > 0 ? (
              nfts.map((item) => {
                const id = item.tokenId

                const { name, image, price } = item
                return (
                  <div className="listedItemsCard" key={id}>
                    <div className="imageContainer">
                      <img src={image} alt=""></img>
                    </div>
                    <div className="detailsContainer">
                      <div className="name">
                        <header>{name}</header>
                      </div>
                      <div className="currentprice">
                        <header>current Price</header>
                        <span>{price} ETH</span>
                      </div>
                    </div>
                    <div className="subdetailsContainer">
                      <button onClick={() => withdrawNFT(id)}>withdraw</button>
                      <FavoriteBorder />
                    </div>
                  </div>
                )
              })
            ) : (
              <>
                <h2>No NFTs listed for Sell</h2>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default ListedNFTs
