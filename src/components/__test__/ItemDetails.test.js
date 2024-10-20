import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ItemDetails from '../ItemDetails';

jest.mock('../PropertiesTab', () => () => <div data-testid="properties-tab">Properties Tab</div>);
jest.mock('../ImageTab', () => () => <div data-testid="image-tab">Image Tab</div>);

const mockItem = {
  guid: '123',
  properties: { key: 'value' },
};

const renderWithRouter = (ui, { route = '/' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="*" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe('ItemDetails', () => {
  test('renders tabs correctly', () => {
    renderWithRouter(<ItemDetails item={mockItem} />);
    // Check if the tabs are rendered correctly
    expect(screen.getByRole('tab', { name: 'Properties' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Image' })).toBeInTheDocument();
  });

  test('displays Properties tab by default', () => {
    renderWithRouter(<ItemDetails item={mockItem} />);
    // Check if the Properties tab is displayed and the Image tab is not displayed
    expect(screen.getByTestId('properties-tab')).toBeInTheDocument();
    expect(screen.queryByTestId('image-tab')).not.toBeInTheDocument();
  });

  test('switches to Image tab when clicked', () => {
    renderWithRouter(<ItemDetails item={mockItem} />);
    fireEvent.click(screen.getByRole('tab', { name: 'Image' }));
    // Check if the Properties tab is not displayed and the Image tab is displayed
    expect(screen.queryByTestId('properties-tab')).not.toBeInTheDocument();
    expect(screen.getByTestId('image-tab')).toBeInTheDocument();
  });

  test('initializes with correct tab based on URL', () => {
    renderWithRouter(<ItemDetails item={mockItem} />, { route: '/?tab=1' });
    // Check if the Image tab is displayed and the Properties tab is not displayed
    expect(screen.getByTestId('image-tab')).toBeInTheDocument();
    expect(screen.queryByTestId('properties-tab')).not.toBeInTheDocument();
  });
});