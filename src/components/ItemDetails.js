import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Tabs,
  Tab,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

function ItemDetails({ item, onClose }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {item.name}
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Properties" />
        <Tab label="Image" />
      </Tabs>
      <DialogContent dividers>
        {tabIndex === 0 && (
          <Box p={2}>
            {Object.entries(item.properties).map(([key, value]) => (
              <Typography key={key} variant="body1">
                <strong>{key}:</strong> {String(value)}
              </Typography>
            ))}
          </Box>
        )}
        {tabIndex === 1 && (
          <Box p={2} textAlign="center">
            {imageLoading && !imageError && <CircularProgress />}
            {imageError && (
              <Typography variant="body1" color="error">
                Error loading image.
              </Typography>
            )}
            <img
              src={`http://localhost:8080/image/${item.guid}`}
              alt={item.name}
              style={{ maxWidth: '100%', display: imageLoading ? 'none' : 'block' }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ItemDetails;