import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';  
import PropertiesTab from './PropertiesTab';
import ImageTab from './ImageTab';

// Component to display the item details
function ItemDetails({ item }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = parseInt(searchParams.get('tab')) || 0; 
  const [tabIndex, setTabIndex] = useState(initialTab);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setSearchParams({ tab: newValue }); 
  };

  useEffect(() => {
    setTabIndex(initialTab);
  }, [initialTab]);

  return (
    <Box p={2}>
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