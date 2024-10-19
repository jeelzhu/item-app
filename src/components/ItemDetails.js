import React, { useState } from 'react';
import {
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
} from '@mui/material';
import PropertiesTab from './PropertiesTab';
import ImageTab from './ImageTab';

function ItemDetails({ item, onBack }) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box p={2}>
      <Button variant="outlined" onClick={onBack} style={{ marginBottom: 16 }}>
        Back
      </Button>
      <Typography variant="h4" gutterBottom>
        {item.name}
      </Typography>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Properties" />
        <Tab label="Image" />
      </Tabs>
      <Box mt={2}>
        {tabIndex === 0 && <PropertiesTab properties={item.properties} />}
        {tabIndex === 1 && <ImageTab guid={item.guid} />}
      </Box>
    </Box>
  );
}

export default ItemDetails;