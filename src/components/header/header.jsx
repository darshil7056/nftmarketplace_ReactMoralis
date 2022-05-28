import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { IconButton } from '@material-ui/core'
import { Tooltip } from '@material-ui/core'
// import { Chains } from '../chains/Chains'
import SearchIcon from '@material-ui/icons/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { ConnectButton } from 'web3uikit'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))
export const Header = () => {
  //profile
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  //Community
  const [anchorE2, setAnchorE2] = useState(null)
  const open2 = Boolean(anchorE2)
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget)
  }
  const handleClose2 = () => {
    setAnchorE2(null)
  }

  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="logo">{/* <img alt="" src={inferenz} /> */}</div>

        <div className="leftHeader">
          <Link to="/" className="link">
            <div className="leftContainer">
              <span>Home</span>
            </div>
          </Link>
          <Link to="/explore" className="link">
            <div className="leftContainer">
              <span>Marketplace</span>
            </div>
          </Link>

          <Link to="/stats" className="link">
            <div className="leftContainer">
              <span>Trending NFTs</span>
            </div>
          </Link>

          <div className="leftContainer">
            <Tooltip title="About Us">
              <span
                onClick={handleClick2}
                size="large"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                Community
              </span>
            </Tooltip>
            <Menu
              anchorEl={anchorE2}
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
                    color: 'white',
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
              <MenuItem style={{ fontWeight: 'bold' }}>About</MenuItem>
              <MenuItem style={{ fontWeight: 'bold' }}>Blog</MenuItem>
              <MenuItem style={{ fontWeight: 'bold' }}>Resources</MenuItem>
            </Menu>
          </div>

          <Link to="/create" className="link">
            <div className="leftContainer">
              <span>Create</span>
            </div>
          </Link>
        </div>

        <div className="rightHeader">
          <div className="rightContainer">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                style={{ color: 'white' }}
              />
            </Search>
          </div>
          <div className="rightContainer">
            <ConnectButton />
          </div>
          <div className="rightContainer">
            <div className="headerIcons">
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="medium"
                  sx={{ ml: 2, color: 'white' }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <AccountCircleOutlined style={{ color: 'white' }} />
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
                      mr: -0.5,
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
                <Link
                  to="/profile"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <MenuItem style={{ fontWeight: 'bold' }}>Profile</MenuItem>
                </Link>
                <MenuItem style={{ fontWeight: 'bold' }}>Favorites</MenuItem>
                <Link
                  to="/collection"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <MenuItem style={{ fontWeight: 'bold' }}>
                    Collections
                  </MenuItem>
                </Link>
                <Link
                  to="/listedNfts"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <MenuItem style={{ fontWeight: 'bold' }}>
                    Listed NFTs
                  </MenuItem>
                </Link>
                <MenuItem style={{ fontWeight: 'bold' }}>Settings</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
