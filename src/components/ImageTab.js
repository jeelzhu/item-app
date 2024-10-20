import React, { useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { getImageUrl } from '../services/api'; 

// Component to display the image in tab 2
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
      {loading && !error && <CircularProgress />}
      {error && (<Typography color="error">Error found when loading image.</Typography>)}
      <img
        src={getImageUrl(guid)} // Use the API service to get the image URL
        alt="Item"
        style={{ maxWidth: '100%', display: loading ? 'none' : 'block' }}
        onLoad={handleLoad}
        onError={handleError}
    />
    </Box>
  );
}

export default ImageTab;