import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  CircularProgress,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import useFetchItems from '../hooks/useFetchItems';
import ItemHeader from './ItemHeader';
import ItemRow from './ItemRow';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
  message: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

function ItemList({ onSelect }) {
  const classes = useStyles();
  const { items, loading, error } = useFetchItems();

  if (loading) {
    return (
      <div className={classes.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography color="error" className={classes.message}>
        Error: {error}
      </Typography>
    );
  }

  if (items.length === 0) {
    return (
      <Typography className={classes.message}>
        No items found.
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} className={classes.container}>
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
