import React, { useState } from 'react';
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Stack,
} from '@mui/material';

const sampleData = [
  { id: 1, sellerName: 'Ramesh', itemName: 'Rohu Fish', itemPrice: 200, quantity: 5, buyerName: 'Suresh' },
  { id: 2, sellerName: 'Dinesh', itemName: 'Catla Fish', itemPrice: 250, quantity: 3, buyerName: 'Ganesh' },
  { id: 3, sellerName: 'Suresh', itemName: 'Prawn', itemPrice: 300, quantity: 2, buyerName: 'Mahesh' },
];

const FisheryTable = () => {
  const [data] = useState(sampleData);
  const [sellerFilter, setSellerFilter] = useState('');
  const [itemFilter, setItemFilter] = useState('');
  const [buyerFilter, setBuyerFilter] = useState('');
  const [filteredData, setFilteredData] = useState(sampleData);

  const handleSearch = () => {
    const filtered = data.filter((row) =>
      row.sellerName.toLowerCase().includes(sellerFilter.toLowerCase()) &&
      row.itemName.toLowerCase().includes(itemFilter.toLowerCase()) &&
      row.buyerName.toLowerCase().includes(buyerFilter.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: 1000 }}>
      <Typography variant="h5" gutterBottom>
        Fishery Management System
      </Typography>

      <Stack direction="row" spacing={2} marginBottom={2}>
        <TextField
          label="Seller Name"
          variant="outlined"
          value={sellerFilter}
          onChange={(e) => setSellerFilter(e.target.value)}
          fullWidth
        />
        <TextField
          label="Item Name"
          variant="outlined"
          value={itemFilter}
          onChange={(e) => setItemFilter(e.target.value)}
          fullWidth
        />
        <TextField
          label="Buyer Name"
          variant="outlined"
          value={buyerFilter}
          onChange={(e) => setBuyerFilter(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell style={{ color: '#fff' }}>Sl No</TableCell>
              <TableCell style={{ color: '#fff' }}>Seller Name</TableCell>
              <TableCell style={{ color: '#fff' }}>Item Name</TableCell>
              <TableCell style={{ color: '#fff' }}>Item Price</TableCell>
              <TableCell style={{ color: '#fff' }}>Quantity</TableCell>
              <TableCell style={{ color: '#fff' }}>Total Price</TableCell>
              <TableCell style={{ color: '#fff' }}>Buyer Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.sellerName}</TableCell>
                <TableCell>{row.itemName}</TableCell>
                <TableCell>₹{row.itemPrice}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>₹{row.itemPrice * row.quantity}</TableCell>
                <TableCell>{row.buyerName}</TableCell>
              </TableRow>
            ))}
            {filteredData.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No records found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default FisheryTable;
