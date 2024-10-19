import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  CircularProgress,
  Typography,
} from '@mui/material';
import ItemHeader from './ItemHeader';
import ItemRow from './ItemRow';
import { fetchItems } from '../redux/actions/itemActions';

function ItemList({ onSelect }) {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  if (items.length === 0) {
    return <Typography>No items found.</Typography>;
  }

  return (
    <TableContainer component={Paper}>
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