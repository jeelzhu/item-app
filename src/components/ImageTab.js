import React, { useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getImageUrl } from '../services/api';

// Styled image with default styles
const StyledImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  marginTop: theme.spacing(2),
}));

function ImageTab({ guid }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <Box p={2} textAlign="center">
      {loading && !error && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          Error occurred while loading the image.
        </Typography>
      )}
      {!error && (
        <StyledImage
          src={getImageUrl(guid)}
          alt="Item"
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: loading ? 'none' : 'block' }} 
        />
      )}
    </Box>
  );
}

export default ImageTab;
