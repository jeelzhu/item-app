import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import ItemDetails from '../ItemDetails';
import '@testing-library/jest-dom/extend-expect';

//Mock child components
jest.mock('../PropertiesTab', () => () => <div>Properties Content</div>);
jest.mock('../ImageTab', () => () => <div>Image Content</div>);

describe('ItemDetails Component', () => {
  const itemMock = {
    guid: '1234',
    properties: {
      propString: 'value1',
      propNumber: 1,
      date: '10/10/2014',
    },
  };

  // Create a theme instance that can be reused in each test
  const theme = createTheme();

  it('renders the Properties and Image tabs', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ItemDetails item={itemMock} />
        </BrowserRouter>
      </ThemeProvider>
    );

    // Check that both tabs are rendered
    expect(screen.getByRole('tab', { name: /properties/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /image/i })).toBeInTheDocument();
  });

  it('renders PropertiesTab content by default', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ItemDetails item={itemMock} />
        </BrowserRouter>
      </ThemeProvider>
    );

    // By default, PropertiesTab content should be rendered
    expect(screen.getByText('Properties Content')).toBeInTheDocument();
  });

  it('switches to the Image tab and renders ImageTab content', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ItemDetails item={itemMock} />
        </BrowserRouter>
      </ThemeProvider>
    );

    // Click on the Image tab
    fireEvent.click(screen.getByRole('tab', { name: /image/i }));

    // Check that ImageTab content is displayed
    expect(screen.getByText('Image Content')).toBeInTheDocument();
    // Ensure PropertiesTab content is not rendered
    expect(screen.queryByText('Properties Content')).not.toBeInTheDocument();
  });

  it('switches back to the Properties tab and renders PropertiesTab content', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ItemDetails item={itemMock} />
        </BrowserRouter>
      </ThemeProvider>
    );

    // Click on the Image tab and then back to Properties tab
    fireEvent.click(screen.getByRole('tab', { name: /image/i }));
    fireEvent.click(screen.getByRole('tab', { name: /properties/i }));

    // Check that PropertiesTab content is displayed
    expect(screen.getByText('Properties Content')).toBeInTheDocument();
    // Ensure ImageTab content is not rendered
    expect(screen.queryByText('Image Content')).not.toBeInTheDocument();
  });

  it('handles query parameters to select initial tab', () => {
    // Set the initial route with query parameter to set initial tab
    window.history.pushState({}, 'Test page', '/?tab=1');

    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ItemDetails item={itemMock} />
        </BrowserRouter>
      </ThemeProvider>
    );

    // Check that the ImageTab content is rendered initially based on the query parameter
    expect(screen.getByText('Image Content')).toBeInTheDocument();
  });
});
