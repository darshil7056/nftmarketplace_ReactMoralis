import { React, useState, useRef } from 'react'
import './Create.css'
// import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom'
import { marketPlaceAddress, ABI } from '../contractAddress'
import { ethers } from 'ethers'
import { useHistory } from 'react-router-dom'
import Moralis from 'moralis/dist/moralis.min.js'
import { Loader } from '../../components/Loader/Loader'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Create = () => {
  toast.configure()
  const currentUser = Moralis.User.current()
  Moralis.enableWeb3()

  if (!currentUser) {
    Moralis.authenticate().then(function (user) {
      console.log(user.get('ethAddress'))
    })
  }
  let history = useHistory()
  //api
  const [user, setUser] = useState({
    name: '',
    description: '',
    collection: '',
    image: '',
    blockchain: '',
    price: '',
    extlink: '',
  })
  const [loading, setLoading] = useState(false)
  let name, value
  const handleChange = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
    console.log(name, value)
  }
  //image drag-drop
  const fileInput = useRef(null)
  const [image, setImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [imageUri, setImageUri] = useState('')
  const handleFile = (file) => {
    //you can carry out any file validations here...
    setImage(file)
    setPreviewUrl(URL.createObjectURL(file))
  }
  const handleOndragOver = (event) => {
    event.preventDefault()
  }

  const handleOndrop = (event) => {
    //prevent the browser from opening the image
    event.preventDefault()
    event.stopPropagation()
    //let's grab the image file
    let imageFile = event.dataTransfer.files[0]
    handleFile(imageFile)
  }

  const uploadImage = async () => {
    try {
      // Save file input to IPFS
      const data = image
      console.log(data, 'data')
      const file = new Moralis.File(data.name, data)
      await file.saveIPFS()
      console.log(file.hash())
      const url = file
      return url
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  const uploadToIPFS = async (imageURL) => {
    try {
      const { name, description, price } = user
      if (!name || !description || !price || !imageURL) return
      /* first, upload to IPFS */
      const data = {
        name,
        description,
        image: imageURL,
      }
      const file = new Moralis.File('file.json', {
        base64: btoa(JSON.stringify(data)),
      })
      await file.saveIPFS()
      setImageUri(file.hash())
      return file.ipfs()

      // await setJsonLink(file.ipfs());
      // console.log(file.ipfs(), file.hash());
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  const listNFTForSale = async (hash, url) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      // Prompt user for account connections
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      console.log('Account:', await signer.getAddress())
      /* next, create the item */
      const price = ethers.utils.parseUnits(user.price, 'ether')
      let contract = new ethers.Contract(marketPlaceAddress, ABI, signer)
      let listingPrice = await contract.getListingPrice()
      listingPrice = listingPrice.toString()

      let transaction = await contract.createToken(url, hash, price, {
        value: listingPrice,
      })
      await transaction.wait()
      console.log(transaction, 'transaction')
      toast.success('NFT Minted Successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 8000,
      })
      setLoading(false)
      // console.log(transaction, 'Testing')
    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error(error.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 8000,
      })
    }
  }
  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(user)
    const img = await uploadImage()
    // console.log(img.ipfs(),'>>>>')
    const metaurl = await uploadToIPFS(img.ipfs())
    console.log(metaurl)
    await listNFTForSale(img.hash(), metaurl)
    history.push('/explore')
  }

  return (
    <div className="createPage">
      {loading ? (
        <Loader />
      ) : (
        <>
          <></>
          <h3 className="craetetitle">Create New Item</h3>
          <div className="CreateCard">
            <div className="leftCard">
              <p className="requiredfield">
                <span className="span">*</span>Required Field
              </p>
              <div className="uploadImage">
                <p>
                  Image, Video, Audio, or 3D Model
                  <span>*</span>
                </p>
                <div
                  className="dragDrop"
                  onDragOver={handleOndragOver}
                  onDrop={handleOndrop}
                  onClick={() => fileInput.current.click()}
                >
                  <div className="dragDropspan">
                    <p>Click to select or Drag and drop image here....</p>
                    <span>PNG, GIF, WEBP, WEB3 OR MP4. Max Size: 100mb</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInput}
                    hidden
                    onChange={(e) => handleFile(e.target.files[0])}
                  />

                  {previewUrl && (
                    <div>
                      <img src={previewUrl} alt="" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="rightcard">
              <div className="imageDetails">
                <p>
                  Name <span>*</span>
                </p>
                <input
                  className="imageName"
                  type="text"
                  placeholder="image name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
              <div className="imageDetails">
                <p>External link </p>
                <input
                  className="imageUrl"
                  type="url"
                  placeholder="http://xyz/item"
                  name="extlink"
                  value={user.extlink}
                  onChange={handleChange}
                />
              </div>
              <div className="imageDetails">
                <p>Description </p>
                <textarea
                  className="imagedesc"
                  type="text"
                  placeholder="provide a detailed description of your item"
                  name="description"
                  value={user.description}
                  onChange={handleChange}
                />
              </div>
              <div className="imageDetails">
                <p>
                  Price <span>*</span>
                </p>
                <input
                  className="imageName"
                  type="text"
                  placeholder="00.00 ETH"
                  name="price"
                  value={user.price}
                  onChange={handleChange}
                />
              </div>
              <Link to="collection" className="link">
                <div className="createButton">
                  <button
                    className="buttoncreate"
                    type="submit"
                    onClick={submit}
                  >
                    Create
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
