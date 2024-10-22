import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ItemList from '../ItemList';
import useFetchItems from '../../hooks/useFetchItems';

jest.mock('axios'); //Uses the mock defined in __mocks__/axios.js
jest.mock('../../hooks/useFetchItems');

describe('ItemList Component', () => {
  const mockOnSelect = jest.fn();
  const theme = createTheme(); //Create a default Material-UI theme

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    // Mock loading state
    useFetchItems.mockReturnValue({ items: [], loading: true, error: null });

    render(
      <ThemeProvider theme={theme}>
        <ItemList onSelect={mockOnSelect} />
      </ThemeProvider>
    );

    // Verify CircularProgress is displayed
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders items correctly', () => {
    // Mock successful fetch with items
    const mockItems = [
      { guid: '1', name: 'Item 1', path: ['path1', 'path2'] },
      { guid: '2', name: 'Item 2', path: ['path3', 'path4'] },
    ];
    useFetchItems.mockReturnValue({ items: mockItems, loading: false, error: null });

    render(
      <ThemeProvider theme={theme}>
        <ItemList onSelect={mockOnSelect} />
      </ThemeProvider>
    );

    //Verify items are rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('calls onSelect when an item is clicked', () => {
    //Mock successful fetch with items
    const mockItems = [
      { guid: '1', name: 'Item 1', path: ['path1', 'path2'] },
      { guid: '2', name: 'Item 2', path: ['path3', 'path4'] },
    ];
    useFetchItems.mockReturnValue({ items: mockItems, loading: false, error: null });

    render(
      <ThemeProvider theme={theme}>
        <ItemList onSelect={mockOnSelect} />
      </ThemeProvider>
    );

    //Get the items from the screen
    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');

    //Simulate clicking the first item
    fireEvent.click(item1);
    expect(mockOnSelect).toHaveBeenCalledWith({ guid: '1', name: 'Item 1', path: ['path1', 'path2'] });

    //Simulate clicking the second item
    fireEvent.click(item2);
    expect(mockOnSelect).toHaveBeenCalledWith({ guid: '2', name: 'Item 2', path: ['path3', 'path4'] });
  });
});
