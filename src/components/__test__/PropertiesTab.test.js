import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertiesTab from '../PropertiesTab';
import '@testing-library/jest-dom/extend-expect';
import { isDateString, formatDate } from '../../utils/utils';

// Mock utils functions
jest.mock('../../utils/utils', () => ({
  isDateString: jest.fn(),
  formatDate: jest.fn(),
}));

describe('PropertiesTab Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test to prevent data leakage
  });

  const propertiesMock = {
    propString: 'value1',
    propNumber: 1,
    date: '10/10/2014',
  };

  it('renders all properties with correct keys and values', () => {
    // Mock isDateString to recognize "date" as a date value
    isDateString.mockImplementation((value) => value === propertiesMock.date);
    // Mock formatDate to return a formatted date string
    formatDate.mockImplementation(() => 'October 10, 2014');

    render(<PropertiesTab properties={propertiesMock} />);

    // Check if property keys are rendered correctly
    expect(screen.getByText('propString')).toBeInTheDocument();
    expect(screen.getByText('propNumber')).toBeInTheDocument();
    expect(screen.getByText('date')).toBeInTheDocument();

    // Check if property values are rendered correctly
    expect(screen.getByText('value1')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('October 10, 2014')).toBeInTheDocument();
  });

  it('handles empty properties object without problem', () => {
    render(<PropertiesTab properties={{}} />);

    // Check that no rows are rendered if there are no properties
    const rows = screen.queryAllByRole('row');
    expect(rows).toHaveLength(0);
  });
});
