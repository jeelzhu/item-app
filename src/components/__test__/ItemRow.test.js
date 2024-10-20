import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ItemRow from '../ItemRow';

describe('ItemRow', () => {
  const mockItem = {
    guid: '1001',
    name: 'Test Item Name',
    path: ['Path102', 'Path103']
  };
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    render(<ItemRow item={mockItem} onSelect={mockOnSelect} />);
  });

  test('renders item details correctly', () => {
    // Check if the GUID, name, and path are displayed correctly
    expect(screen.getByText(mockItem.guid)).toBeInTheDocument();
    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.getByText(mockItem.path.join(' > '))).toBeInTheDocument();
  });

  test('calls onSelect when clicked', () => {
    const row = screen.getByRole('row');
    fireEvent.click(row);
    // Check if the onSelect function is called with the correct item
    expect(mockOnSelect).toHaveBeenCalledWith(mockItem);
  });

  test('has correct style', () => {
    const row = screen.getByRole('row');
    // Check if the row has the correct style
    expect(row).toHaveStyle('cursor: pointer');
  });
});