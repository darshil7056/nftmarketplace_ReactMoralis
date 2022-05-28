import React from 'react';
import './Connection.css';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { useMoralis } from "react-moralis";
import { Profile } from '../profile/Profile';
import Alert from '@mui/material/Alert';


export const Connection = () => {
    const { authenticate, isAuthenticated, authError } = useMoralis();
    if (!isAuthenticated) {
        return (
            <div>
                <div className='connection'>
                    <div className='connectionCard'>
                        {authError &&
                            <Alert severity="error">Athentication error!</Alert>}
                        <header>Connect Your Wallet</header>
                        <span>Connect with one of our available wallet providers or create a new one.</span>
                        <div className='walletCollection'>
                            <List >

                                <div className='walletcompo'>
                                    <ListItem onClick={() => authenticate()}>
                                        MetaMask
                                    </ListItem>
                                </div>
                                <Divider />
                                <div className='walletcompo'>
                                    <ListItem>
                                        WalletConnect
                                    </ListItem>
                                </div>
                                <Divider />
                                <div className='walletcompo'>
                                    <ListItem>
                                        Coinbase Wallet
                                    </ListItem>
                                </div>
                                <Divider />
                                <div className='walletcompo'>
                                    <ListItem>
                                        Fortmatic
                                    </ListItem>
                                </div>
                                <Divider />
                                <div className='moreOpt'>
                                    <span>Show more options</span>
                                </div>
                            </List>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Profile />
    )


}

