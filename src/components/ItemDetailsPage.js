import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import { Typography, Button, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ItemDetails from './ItemDetails';
import useFetchItems from '../hooks/useFetchItems';

// Styled Button
const BackButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

function ItemDetailsPage() {
  const { id } = useParams();  
  const navigate = useNavigate();
  const { items, loading, error } = useFetchItems();  
  const item = items.find((item) => item.guid === id);  
  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>
        Error: {error}
      </Typography>
    );
  }

  if (!item) {
    return (
      <Typography sx={{ textAlign: 'center', mt: 2 }}>
        No item found.
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <BackButton variant="outlined" onClick={() => navigate(-1)}>
        Back
      </BackButton>
      <ItemDetails item={item} />
    </Box>
  );
}

export default ItemDetailsPage;
