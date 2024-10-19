import React from 'react';
import ItemList from './components/ItemList';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Item Catalog
      </Typography>
      <ItemList />
    </Container>
  );
}

export default App;