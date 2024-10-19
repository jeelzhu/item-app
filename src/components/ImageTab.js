import React, { useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

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
        src={`http://localhost:8080/image/${guid}`}
        alt="Item"
        style={{ maxWidth: '100%', display: loading ? 'none' : 'block' }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </Box>
  );
}

export default ImageTab;