import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  CircularProgress,
  Typography,
} from '@mui/material';
import useFetchItems from '../hooks/useFetchItems';
import ItemHeader from './ItemHeader';
import ItemRow from './ItemRow';


function ItemList({ onSelect }) {
  const { items, loading, error } = useFetchItems();  
  if (loading) return <CircularProgress />;  
  if (error) return <Typography color="error">Error: {error}</Typography>;  
  if (items.length === 0) return <Typography>No items found.</Typography>;  

  return (
    <TableContainer component={Paper} >
      <Table>
        <ItemHeader />
        <TableBody>
          {items.map((item) => (
            <ItemRow key={item.guid} item={item} onSelect={onSelect} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ItemList;