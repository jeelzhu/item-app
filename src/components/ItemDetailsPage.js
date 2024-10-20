import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import { Typography, Button, CircularProgress } from '@mui/material';
import ItemDetails from './ItemDetails';
import useFetchItems from '../hooks/useFetchItems';

// Component to display the item details page
function ItemDetailsPage() {
    const { id } = useParams();  
    const navigate = useNavigate();
    const { items, loading, error } = useFetchItems();  
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