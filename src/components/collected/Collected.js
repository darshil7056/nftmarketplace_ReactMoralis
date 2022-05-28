import React from 'react';
import { Profile } from '../../pages/profile/Profile';
import './Collected.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

export const Collected = () => {
    const [items, setItems] = React.useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setItems(
            typeof value === 'string' ? value.split(',') : value,
        );

    }

    const [collected, setCollected] = React.useState([]);
    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setCollected(
            typeof value === 'string' ? value.split(',') : value,
        );

    }

    return (
        <div className='collected'>
            <Profile />
            <div className='collectedCard'>
                <div className='collectedHeader'>
                    <div className='collectedLeft'>
                        <div className='searchbar'>
                            <TextField InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" style={{ color: 'inherit', border: 'none' }}>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }} type='search' placeholder='search' />
                        </div>
                    </div>

                    <div className='collectedRight'>
                        <div className='profileDropdown'>
                            <FormControl sx={{ m: 1, width: 250, mt: 3, borderRadius: 10, border: 'none' }}>
                                <Select
                                    displayEmpty
                                    value={items}
                                    onChange={handleChange}
                                    input={<OutlinedInput />}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Single Items</em>;
                                        }
                                        return selected.join(', ');
                                    }}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="All times" style={{ fontWeight: 'bold' }}>All times</MenuItem>
                                    <MenuItem value="Bundles" style={{ fontWeight: 'bold' }}>Bundles</MenuItem>

                                </Select>
                            </FormControl>
                        </div>
                        <div className='profileDropdown'>
                            <FormControl sx={{ m: 1, width: 250, mt: 3, borderRadius: 10, border: 'none' }}>
                                <Select
                                    displayEmpty
                                    value={collected}
                                    onChange={handleChange2}
                                    input={<OutlinedInput />}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Recently Received</em>;
                                        }
                                        return selected.join(', ');
                                    }}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="Recently listed" style={{ fontWeight: 'bold' }}>Recently listed</MenuItem>
                                    <MenuItem value="Recently created" style={{ fontWeight: 'bold' }}>Recently created</MenuItem>
                                    <MenuItem value="Recently sold" style={{ fontWeight: 'bold' }}>Recently sold</MenuItem>
                                    <MenuItem value="Recently Received" style={{ fontWeight: 'bold' }}>Recently Received</MenuItem>
                                    <MenuItem value="Ending soon" style={{ fontWeight: 'bold' }}>Ending soon</MenuItem>
                                    <MenuItem value="Price: low to high" style={{ fontWeight: 'bold' }}>Price: low to high</MenuItem>
                                    <MenuItem value="Price: high to low " style={{ fontWeight: 'bold' }}> Price: high to low</MenuItem>
                                    <MenuItem value="Oldest" style={{ fontWeight: 'bold' }}>Oldest</MenuItem>

                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='collectedCompo'>
                    <h3>No items to display!</h3>
                </div>
            </div>
        </div>
    )
}
