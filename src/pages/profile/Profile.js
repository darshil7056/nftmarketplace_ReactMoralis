import React, { useState, useRef } from 'react'
import './Profile.css'
import { BsFillPencilFill } from 'react-icons/bs'

import Share from '@material-ui/icons/Share'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { IconButton } from '@material-ui/core'
import { Tooltip } from '@material-ui/core'
import FlagOutlined from '@material-ui/icons/FlagOutlined'
import Facebook from '@material-ui/icons/Facebook'
import WhatsApp from '@material-ui/icons/WhatsApp'
import SubscriptionsOutlined from '@material-ui/icons/SubscriptionsOutlined'
import { useMoralis } from 'react-moralis'

export const Profile = () => {
  const { user } = useMoralis()
  
 
  //share
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  //more
  const [anchorEl2, setAnchorEl2] = React.useState(null)
  const open2 = Boolean(anchorEl2)
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget)
  }
  const handleClose2 = () => {
    setAnchorEl2(null)
  }
  //profile image
  const fileProfileInput = useRef(null)
  const [profileImage, setProfileImage] = useState(null)
  const [profilepreviewUrl, setProfilePreviewUrl] = useState('')
  const handleProfile = (file) => {
    setProfileImage(file)
    setProfilePreviewUrl(URL.createObjectURL(file))
  }
  const handleProfileOndragOver = (event) => {
    event.preventDefault()
  }
  const handleProfileOndrop = (event) => {
    event.preventDefault()
    event.stopPropagation()
    let profile = event.dataTransfer.files[0]
    handleProfile(profile)
  }
  //bg image
  const fileBgInput = useRef(null)
  const [bgImage, setBgImage] = useState(null)
  const [bgpreviewUrl, setBgPreviewUrl] = useState('')
  const handleBgImage = (file) => {
    setBgImage(file)
    setBgPreviewUrl(URL.createObjectURL(file))
  }
  const handleBgImageOndragOver = (event) => {
    event.preventDefault()
  }
  const handleBgImageOndrop = (event) => {
    event.preventDefault()
    event.stopPropagation()
    let BgImg = event.dataTransfer.files[0]
    handleBgImage(BgImg)
  }
  return (
    <div className="profile">
      <div className="profileContainer">
        <div
          className="bgImg"
          onDragOver={handleBgImageOndragOver}
          onDrop={handleBgImageOndrop}
          onClick={() => fileBgInput.current.click()}
        >
          <BsFillPencilFill className="imgIcon" />
          <input
            type="file"
            accept="image/*"
            ref={fileBgInput}
            hidden
            onChange={(e) => handleBgImage(e.target.files[0])}
          />
          {bgpreviewUrl && (
            <div>
              <img src={bgpreviewUrl} alt="" />
            </div>
          )}
        </div>

        <div
          className="profileImg"
          onDragOver={handleProfileOndragOver}
          onDrop={handleProfileOndrop}
          onClick={() => fileProfileInput.current.click()}
        >
          <BsFillPencilFill className="imgIcon" />
          <input
            type="file"
            accept="image/*"
            ref={fileProfileInput}
            hidden
            onChange={(e) => handleProfile(e.target.files[0])}
          />
          {profilepreviewUrl && (
            <div>
              <img src={profilepreviewUrl} alt="" />
            </div>
          )}
        </div>
        <div className="profileDetails">
          <header>Username</header>
          <span>{user ? user.get('ethAddress') : 'Wallet ID'}</span>
        
        </div>
      </div>

      <div className="otherDeatils">
        <div className="share">
          <Tooltip title="Share">
            <IconButton
              onClick={handleClick}
              size="medium"
              sx={{ ml: 2, color: 'white' }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Share />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,

                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem style={{ fontWeight: 'bold' }}>
              <Facebook />
            </MenuItem>
            <MenuItem style={{ fontWeight: 'bold' }}>
              <WhatsApp />
            </MenuItem>
            <MenuItem style={{ fontWeight: 'bold' }}>
              <SubscriptionsOutlined />
            </MenuItem>
          </Menu>
        </div>
        <div className="more">
          <Tooltip title="More">
            <IconButton
              onClick={handleClick2}
              size="medium"
              sx={{ ml: 2, color: 'white' }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <MoreHoriz />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl2}
            id="account-menu"
            open={open2}
            onClose={handleClose2}
            onClick={handleClose2}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,

                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem style={{ fontWeight: 'bold' }}>
              <FlagOutlined /> Report
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div className="profileBottomCard">
        <div className="aboutme">
          <header>About Me</header>
          <div className="aboutmeCard">
            <p>
              I make art with the simple goal of giving you something pleasing
              to look at for a few seconds.
            </p>

            <div className="aboutSub">
              <div className="collection">
                <header>Collections</header>
                <span>50</span>
              </div>
              <div className="creation">
                <header>Creations</header>
                <span>105</span>
              </div>
            </div>
          </div>
        </div>
        <div className="CreatedCollected">
        
            <div className="collected">
              <header>Collected</header>
            </div>
        

         
            <div className="Created">
              <header>Created</header>
            </div>
         
        </div>
      </div>
      {/* <div className="profileCollection">
          <Link to="profile_collected" className="link">
            <div className="profileCompo">
              <MdOutlineCollectionsBookmark className="profileIcon" />
              <header>Collected</header>
              <span>0</span>
            </div>
          </Link>

          <Link to="profile_created" className="link">
            <div className="profileCompo">
              <AiOutlineFormatPainter className="profileIcon" />
              <header>Created</header>
              <span>0</span>
            </div>
          </Link>
        </div> */}
    </div>
  )
}
