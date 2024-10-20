import { renderHook } from '@testing-library/react';  
import { useDispatch, useSelector } from 'react-redux';
import useFetchItems from '../useFetchItems';
import { fetchItems } from '../../redux/actions/itemActions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../redux/actions/itemActions', () => ({
  fetchItems: jest.fn(),
}));

describe('useFetchItems', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();  
  });

  test('dispatch fetchItems if items array is empty', () => {
    useSelector.mockReturnValue({ items: [], loading: false, error: null });
    renderHook(() => useFetchItems());
    // Check if the fetchItems function is called
    expect(mockDispatch).toHaveBeenCalledWith(fetchItems());
  });

  test('not dispatch fetchItems if items are already present', () => {
    const mockItems = [{ guid: '1', name: 'Item 1' }];
    useSelector.mockReturnValue({ items: mockItems, loading: false, error: null });
    renderHook(() => useFetchItems());
    // Check if the fetchItems function is not called
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  test('loading state', () => {
    useSelector.mockReturnValue({ items: [], loading: true, error: null });
    const { result } = renderHook(() => useFetchItems());
    // Check if the loading state is returned
    expect(result.current.loading).toBe(true);
  });

  test('error state', () => {
    const errorMessage = 'Failed to fetch items';
    useSelector.mockReturnValue({ items: [], loading: false, error: errorMessage });
    const { result } = renderHook(() => useFetchItems());
    // Check if the error state is returned
    expect(result.current.error).toBe(errorMessage);
  });
});