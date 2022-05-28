import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useMoralis } from "react-moralis";

const networks = {
    ethereum: {
        chainId: '0x1',
    },
    rinkeby: {
        chainId: `0x4`,
    },
    avalanche: {
        chainId: `0xa86a`,
    },
    polygon: {
        chainId: `0x89`,
    },
    binance: {
        chainId: `0x61`,
    },
    bsc: {
        chainId: `0x38`,
    }
};

const changeNetwork = async ({ networkName }) => {
    try {
        if (!window.ethereum) throw new Error("No crypto wallet found");
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    ...networks[networkName]
                }
            ]
        });
    } catch (err) {
        console.log('Error>>>>', err)
    }

};

export const Chains = () => {

    const { isAuthenticated } = useMoralis();
    const [chains, setChains] = useState('');

    const handleChange = (event) => {
        setChains(event.target.value);
    };

    const handleNetworkSwitch = async (networkName) => {
        await changeNetwork({ networkName });
    };

    const networkChanged = (chainId) => {
        console.log({ chainId });
    };

    useEffect(() => {
        window.ethereum.on("chainChanged", networkChanged);

        return () => {
            window.ethereum.removeListener("chainChanged", networkChanged);
        };
    }, []);

    if (!isAuthenticated) return null;

    return <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
            <Select
                labelId="demo-simple-select-standard-label"
                label="Select Chain"
                id="demo-simple-select-standard"
                value={chains}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                style={{ fontWeight: 'bold', color: 'white', marginTop: '5px' }}
            >
                <MenuItem value="" style={{ fontWeight: 'bold' }} disabled><em>Select Chain</em></MenuItem>
                <MenuItem value='Ethereum' style={{ fontWeight: 'bold' }} onClick={() => handleNetworkSwitch("ethereum")}>Ethereum</MenuItem>
                <MenuItem value='Rinkeby Testnet' style={{ fontWeight: 'bold' }} onClick={() => handleNetworkSwitch("rinkeby")}>Rinkeby Testnet</MenuItem>
                <MenuItem value='Polygon' style={{ fontWeight: 'bold' }} onClick={() => handleNetworkSwitch("polygon")}>Polygon</MenuItem>
                <MenuItem value='Avalanche' style={{ fontWeight: 'bold' }} onClick={() => handleNetworkSwitch("avalanche")}>Avalanche</MenuItem>
                <MenuItem value='Binance' style={{ fontWeight: 'bold' }} onClick={() => handleNetworkSwitch("binance")}>Binance</MenuItem>
                <MenuItem value='BSC' style={{ fontWeight: 'bold' }} onClick={() => handleNetworkSwitch("bsc")}>BSC</MenuItem>
            </Select>
        </FormControl>



    </div>;
};
