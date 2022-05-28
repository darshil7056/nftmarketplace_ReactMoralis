import { React, useCallback, useState } from 'react';
import './CreateCollections.css';
import { useDropzone } from 'react-dropzone';
import { BsCardImage } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { FaDiscord } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { GrMedium } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

export const CreateCollections = () => {

    const [addCat, setaddCat] = useState('');

    const handleChange = (event) => {
        setaddCat(event.target.value);
    };

    const [image, setImage] = useState([]);
    // const [secondImg, setSecondImg] = useState([]);
    // const [thirdImg, setThirdImg] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setImage(
            acceptedFiles.map((upFile) => Object.assign(upFile, {
                preview: URL.createObjectURL(upFile)
            }))
        )
    }, [])

    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop
    })


    return (
        <div className='createCollections'>
            <div className='createCollectionCard'>
                <h3 className='title'>Create a Collection</h3>
                <p className='requiredfield'>
                    <span className='span'>*</span>Required Field
                </p>

                <div className='collectionLogo'>
                    <p>Logo Image <span>*</span></p>
                    <span>This image will also be used for navigation. 350 x 350 recommended.</span>
                    <div className='logoCollection' {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ? <p><BsCardImage className='imageIcon' /></p> : <p><BsCardImage /></p>
                        }
                        {image.map((upFile) => {
                            return (
                                <div>
                                    <img alt='preview' src={upFile.preview} />
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* <div className='featuredImg'>
                    <p>Featured image </p>
                    <span>This image will be used for featuring your collection on the homepage, category pages, or other promotional areas. 600 x 400 recommended.</span>
                    <div className='imageFeatured' {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ? <p><BsCardImage className='imageIcon' /></p> : <p><BsCardImage /></p>
                        }
                        {secondImg.map((images) => {
                            return (
                                <div>
                                    <img alt='preview' src={images.preview} />
                                </div>
                            )
                        })}
                    </div>
                </div> */}

                {/* <div className='bannerImg'>
                    <p>Banner image</p>
                    <span>This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 400 recommended.</span>
                    <div className='imgBanner' {...getRootProps()}>
                        <input {...getInputProps()} onClick={() => {

                        }} />
                        {
                            isDragActive ? <p><BsCardImage className='imageIcon' /></p> : <p><BsCardImage /></p>
                        }
                        {thirdImg.map((upFile) => {
                            return (
                                <div>
                                    <img alt='preview' src={upFile.preview} />
                                </div>
                            )
                        })}
                    </div>
                </div> */}

                <div className='collectionDetails'>
                    <p>Name <span>*</span></p>
                    <input className='collectionName' type='text' placeholder='image name' />
                </div>

                <div className='collectionDetails'>
                    <p>URL </p>
                    <span>Customize your URL. Must only contain lowercase letters,numbers, and hyphens.
                    </span>
                    <input className='collectionUrl' type='url' placeholder='https://.io/collection/' />
                </div>

                <div className='collectionDetails'>
                    <p>Description </p>
                    <span>Markdown syntax is supported. 0 of 1000 characters used.
                    </span>
                    <textarea className='collectiondesc' type='text' placeholder='' />
                </div>

                <div className='collectionDetails'>
                    <p>Category </p>
                    <span>Adding a category will help make your item discoverable.
                    </span>
                    <FormControl sx={{ m: 1, minWidth: 650 }}>
                        <InputLabel >Add category</InputLabel>
                        <Select

                            id="demo-simple-select-helper"
                            value={addCat}
                            label="Add category"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='collectionDetails'>
                    <p>Links </p>
                    <div>
                        <CgWebsite className='collectionIcons' /><input className='collectionLinks' type='text' placeholder='yoursite.io' />
                    </div>
                    <div>
                        <FaDiscord className='collectionIcons' /><input className='collectionLinks' type='text' placeholder='https://discord.gg/abcd' />
                    </div>
                    <div>
                        <BsInstagram className='collectionIcons' /><input className='collectionLinks' type='text' placeholder='https://www.instagram.com/' />
                    </div>
                    <div>
                        <GrMedium className='collectionIcons' /><input className='collectionLinks' type='text' placeholder='https://www.medium.com/' />
                    </div>
                    <div>
                        <FiSend className='collectionIcons' /><input className='collectionLinks' type='text' placeholder='https://t.me/' />
                    </div>


                </div>

                <div className='collectionBtn'>
                    <button className='buttoncollection' type='submit'>Create</button>
                </div>


            </div>

        </div>
    )
}
