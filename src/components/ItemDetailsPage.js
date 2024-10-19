import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import { useSelector, useDispatch } from 'react-redux';  
import { Typography, Button, CircularProgress } from '@mui/material';
import { fetchItems } from '../redux/actions/itemActions'; 
import ItemDetails from './ItemDetails';

function ItemDetailsPage() {
  const { id } = useParams();  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);

  // Fetch items if items in redux store is empty
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchItems());  
    }
  }, [dispatch, items]);

  const item = items.find((item) => item.guid === id);  

  if (loading) return <CircularProgress />;  
  if (error) return <Typography color="error">Error: {error}</Typography>;  
  if (!item) return <Typography>No item found</Typography>;  

  return (
    <div>
      <Button variant="outlined" onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>
        Back
      </Button>
      <ItemDetails item={item} />
    </div>
  );
}

export default ItemDetailsPage;