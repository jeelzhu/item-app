import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';  
import { makeStyles } from '@mui/styles';
import PropertiesTab from './PropertiesTab';
import ImageTab from './ImageTab';

const useStyles = makeStyles((theme) => ({
  tabsRoot: {
    marginBottom: theme.spacing(2),
  },
  tab: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main + '1A',
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main + '1A',
    },
  },
}));

function ItemDetails({ item }) {
  const classes = useStyles();
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
    <Box>
      <Tabs value={tabIndex} onChange={handleTabChange} className={classes.tabsRoot}>
        <Tab label="Properties" className={classes.tab} />
        <Tab label="Image" className={classes.tab} />
      </Tabs>
      <Box>
        {tabIndex === 0 && <PropertiesTab properties={item.properties} />}
        {tabIndex === 1 && <ImageTab guid={item.guid} />}
      </Box>
    </Box>
  );
}

export default ItemDetails;
