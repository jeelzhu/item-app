import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from '@mui/material';
import ItemDetails from './ItemDetails';

function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/items');
        setItems(response.data);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message || 'Error fetching items');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error}</div>;
  if (items.length === 0) return <div>No items found.</div>;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="item list">
          <TableHead>
            <TableRow>
              <TableCell><strong>GUID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Path</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.guid}
                hover
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedItem(item)}
              >
                <TableCell>{item.guid}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.path.join(' > ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedItem && (
        <ItemDetails
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default ItemList;