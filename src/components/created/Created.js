import React from 'react';
import './Created.css';
import { Profile } from '../../pages/profile/Profile';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";


export const Created = () => {
    const [createdItems, setCreatedItems] = React.useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCreatedItems(
            typeof value === 'string' ? value.split(',') : value,
        );

    }

    const [created, setCreated] = React.useState([]);
    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setCreated(
            typeof value === 'string' ? value.split(',') : value,
        );

    }
    return (
        <div className='created'>
            <Profile />
            <div className='craetedCard'>
                <div className='createdHeader'>
                    <div className='createdLeft'>
                        <div className='createdsearchbar'>
                            <TextField InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" style={{ color: 'inherit', border: 'none' }}>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }} type='search' placeholder='search' />
                        </div>
                    </div>

                    <div className='createdRight'>
                        <div className='createdDropdown'>
                            <FormControl sx={{ m: 1, width: 250, mt: 3, borderRadius: 10, border: 'none' }}>
                                <Select
                                    displayEmpty
                                    value={createdItems}
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
                        <div className='createdDropdown'>
                            <FormControl sx={{ m: 1, width: 250, mt: 3, borderRadius: 10, border: 'none' }}>
                                <Select
                                    displayEmpty
                                    value={created}
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
                                    <MenuItem value="Price: high to low" style={{ fontWeight: 'bold' }}>Price: high to low</MenuItem>
                                    <MenuItem value="Oldest" style={{ fontWeight: 'bold' }}>Oldest</MenuItem>

                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='createdCompo'>
                    <h3>No items to display!</h3>
                </div>
            </div>
        </div>
    )
}
