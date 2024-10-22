import React from 'react';
import { GlobalStyles, ThemeProvider, createTheme } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetailsPage from './components/ItemDetailsPage';

// Create a custom theme 
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Your primary color
    },
    secondary: {
      main: '#dc004e', // Your secondary color
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
  spacing: 2, // Default spacing unit of 8px
});

function App() {
  const navigate = useNavigate();
  
  const handleItemSelected = (item) => {
    navigate(`/items/${item.guid}`);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Global styles for consistency */}
      <GlobalStyles
        styles={{
          '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
          body: { fontFamily: '"Roboto", sans-serif', backgroundColor: '#f5f5f5' },
          a: { textDecoration: 'none', color: 'inherit' },
        }}
      />

      {/* Define application routes */}
      <Routes>
        <Route path="/" element={<ItemList onSelect={handleItemSelected} />} />
        <Route path="/items/:id" element={<ItemDetailsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
