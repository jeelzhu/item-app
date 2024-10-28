import React from 'react';
import { GlobalStyles, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetailsPage from './components/ItemDetailsPage';

//Create a default theme 
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5', // Set the default background color for the application
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    allVariants: {
      color: '#333', // Default text color for all variants
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        body: {
          backgroundColor: '#f5f5f5', // Setting consistent body background
          fontFamily: '"Roboto", sans-serif',
          lineHeight: 1.6,
          color: '#333',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
  spacing: 3, // Default spacing unit for consistency across the app
});


function App() {
  const navigate = useNavigate();
  
  const handleItemSelected = (item) => {
    navigate(`/items/${item.guid}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<ItemList onSelect={handleItemSelected} />} />
        <Route path="/items/:id" element={<ItemDetailsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
