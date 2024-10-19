import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  CircularProgress,
} from '@mui/material';
import ItemHeader from './ItemHeader';
import ItemRow from './ItemRow';
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
        console.log(response.data);
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
          <ItemHeader />
          <TableBody>
            {items.map((item) => (
              <ItemRow
                key={item.guid}
                item={item}
                onSelect={setSelectedItem}
              />
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