import React from 'react'
import './Stats.css'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { BasicTable } from './table'

export const Stats = () => {
  //days dropdown
  const [days, setDays] = React.useState([])
  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setDays(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  //category dropdown
  const [category, setCategory] = React.useState([])
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event
    setCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  //chain dropdown
  const [chain, setChain] = React.useState([])
  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event
    setChain(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }
  return (
    <div className="stats">
      <div className="statsHeader">
        <header>Trending NFTs</header>
        <span>
          The top NFTs, ranked by volume, floor price and other statistics.
        </span>

        <div className="statsDropdown">
          <div className="dropdownCompo">
            <FormControl
              sx={{ m: 1, width: 250, mt: 3, borderRadius: 10, border: 'none' }}
            >
              <Select
                displayEmpty
                value={days}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {  
                    return <em>All time</em>
                  }
                  return selected.join(', ')
                }}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="All time">All time</MenuItem>
                <MenuItem value="Last 24 hours">Last 24 hours</MenuItem>
                <MenuItem value="Last 7 days">Last 7 days</MenuItem>
                <MenuItem value="Last 30 days">Last 30 days</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="dropdownCompo">
            <FormControl
              sx={{ m: 1, width: 250, mt: 3, borderRadius: 10, border: 'none' }}
            >
              <Select
                displayEmpty
                value={category}
                onChange={handleChange2}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>All categories</em>
                  }
                  return selected.join(', ')
                }}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="All categories" disabled>
                  All categories
                </MenuItem>
                <MenuItem value="Art">Art</MenuItem>
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Photography">Photography</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Virtual worlds">Virtual worlds</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="dropdownCompo">
            <FormControl
              sx={{ m: 1, width: 250, mt: 3, borderRadius: 10, border: 'none' }}
            >
              <Select
                displayEmpty
                value={chain}
                onChange={handleChange3}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>All chains</em>
                  }
                  return selected.join(', ')
                }}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="All chains" disabled>
                  All chains
                </MenuItem>
                <MenuItem value="Ethereum">Ethereum</MenuItem>
                <MenuItem value="Polygon">Polygon</MenuItem>
                <MenuItem value="Klaytn">Klaytn</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="tableContainer">
        <BasicTable />
      </div>
    </div>
  )
}
