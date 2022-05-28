import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Collection.css'
import { MdSell } from 'react-icons/md'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import { ethers } from 'ethers'
import axios from 'axios'
import Web3Modal from 'web3modal'
import { marketPlaceAddress, ABI } from '../contractAddress'

export const Collection = () => {
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
    const data = await contract.fetchMyNFTs()
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
    console.log(items)

    setNfts(items)
    console.log(nfts)
    // setLoadingState('loaded')
  }
  useEffect(() => {
    loadNFTs()
  }, [])

  const viewCollections =
    nfts &&
    nfts.map((item) => {
      console.log(item, 'item')
      console.log(item.tokenId)
      return (
        <div className="collecCard" key={item.tokenId}>
          <div className="collecImageCard">
            <img alt="" src={item.image} className="collecImage" />
          </div>
          <div className="detailsdiv">
            <div className="collecDetails">
              <header>{item.name}</header>
              <span>{item.description}</span>
            </div>
            <MoreHoriz style={{ marginRight: 10, cursor: 'pointer' }} />
          </div>
          <div className="collecSubDetails">
            <Link
              to={{ pathname: '/reSellNFTs', state: { item } }}
              className="link"
            >
           
              <MdSell className="collectionIcon" />
            </Link>
          </div>
        </div>
      )
    })
  return (
    <div className="collections">
      <div className="collectionCard">
        <header>Collections</header>
        <span>
          Create, curate, and manage collections of unique NFTs to share and
          sell.
        </span>
      </div>
      <div className="viewCollections">{viewCollections}</div>
    </div>
  )
}
