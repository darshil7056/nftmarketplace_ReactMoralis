import React, { useState } from 'react'
import './ListNFT.css'
import { ethers } from 'ethers'
import { marketPlaceAddress, ABI } from '../contractAddress'
import Web3Modal from 'web3modal'
import { useHistory } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ListNFT = (props) => {
  toast.configure()
  const [loading, setLoading] = useState(false)
  let history = useHistory()
  console.log('ListNFT')
  const [value, setValue] = useState('')

  const data = props.location.state
  console.log(props.location.state, 'data')
  const id = data.item.tokenId

  const listNFTForSale = async () => {
    setLoading(true)
    try {
      if (!value) return
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const priceFormatted = ethers.utils.parseUnits(value, 'ether')
      let contract = new ethers.Contract(marketPlaceAddress, ABI, signer)
      let listingPrice = await contract.getListingPrice()
      listingPrice = listingPrice.toString()
      let transaction = await contract.resellToken(id, priceFormatted, {
        value: listingPrice,
      })
      await transaction.wait()

      toast.success('NFT Listed Successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 8000,
      })
      history.push('/explore')
      console.log(transaction)
    } catch (error) {
      console.log(error, 'error.message')
      toast.error(error.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 8000,
      })
    }
  }
  console.log(data.item.tokenId)
  return (
    <div className="listNFT">
      {loading ? (
        <Loader />
      ) : (
        <div className="listNFTCard">
          <div className="listNFTUpperCard">
            <div className="listNFTImageCard">
              <img alt="" src={data.item.image} />
            </div>
            <div className="listNFTdetailscard">
              <header>{data.item.name}</header>
              <span>{data.item.description}</span>
              <input
                type="text"
                placeholder="00.00 ETH"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                onClick={() => {
                  listNFTForSale()
                }}
              >
                List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListNFT
