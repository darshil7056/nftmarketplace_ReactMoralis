import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


function createData(id,  collection, volume) {
    return {
        id, collection, volume,
        history: [
            { date: '2020-01-05', floorPrice: '10.7', owners: '7.70k', items: '17.7k' },
            { date: '2020-01-05', floorPrice: '2.25', owners: '7.70k', items: '17.7k' },],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);


    return (
        <React.Fragment>
            <TableRow >
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                    {row.id}
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>{row.collection}</TableCell>
                <TableCell align="right" style={{ fontWeight: 'bold' }}>{row.volume} ETH</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div" style={{ fontSize: 'large', fontWeight: 'bolder' }}>
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ fontSize: 'larger', fontWeight: 'bold' }}>Date</TableCell>
                                        <TableCell style={{ fontSize: 'larger', fontWeight: 'bold' }}>Floor Price</TableCell>
                                        <TableCell align="right" style={{ fontSize: 'larger', fontWeight: 'bold' }}>Owners</TableCell>
                                        <TableCell align="right" style={{ fontSize: 'larger', fontWeight: 'bold' }}>Items</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.floorPrice} ETH</TableCell>
                                            <TableCell align="right">{historyRow.owners}</TableCell>
                                            <TableCell align="right">
                                                {historyRow.items}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const rows = [
    createData(1, 'Sports', 159),
    createData(2, 'Virtual Worlds', 237),
    createData(3, 'Music', 262, 16.0),
    createData(4, 'Cupcake', 305, 3.7),
    createData(5, 'Art', 356, 16.0),
];

export const BasicTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell style={{ fontSize: 'large', fontWeight: 'bolder' }}>ID</TableCell>
                        <TableCell style={{ fontSize: 'large', fontWeight: 'bolder' }}>Collection</TableCell>
                        <TableCell align="right" style={{ fontSize: 'large', fontWeight: 'bolder' }}>Volume</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.collection} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}