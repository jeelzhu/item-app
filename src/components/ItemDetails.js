import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
} from '@mui/material';
import PropertiesTab from './PropertiesTab';
import ImageTab from './ImageTab';

function ItemDetails({ item, onClose }) {
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newValue) => setTabIndex(newValue);
  
    return (
      <Dialog open onClose={onClose}>
        <DialogTitle>
          {item.name}
          {/* Close button */}
        </DialogTitle>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Properties" />
          <Tab label="Image" />
        </Tabs>
        <DialogContent>
          {tabIndex === 0 && <PropertiesTab properties={item.properties} />}
          {tabIndex === 1 && <ImageTab guid={item.guid} />}
        </DialogContent>
      </Dialog>
    );
  }
  
  export default ItemDetails;