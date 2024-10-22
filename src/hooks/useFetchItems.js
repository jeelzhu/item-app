import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/actions/itemActions';

// Custom hook to fetch items from the API and manage loading and error states
function useFetchItems() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.itemsState);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchItems());
    }
  }, [dispatch, items]);
  return { items, loading, error };
}

export default useFetchItems;