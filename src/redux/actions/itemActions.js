import * as api from '../../services/api';
import * as types from '../constants/actionTypes';

const fetchItemsRequest = () => ({
  type: types.FETCH_ITEMS_REQUEST
});

const fetchItemsSuccess = (items) => ({
  type: types.FETCH_ITEMS_SUCCESS,
  payload: items
});

const fetchItemsFailure = (error) => ({
  type: types.FETCH_ITEMS_FAILURE,
  payload: error
});

export const fetchItems = () => async (dispatch) => {
  dispatch(fetchItemsRequest());
  try {
    const items = await api.fetchItems();
    dispatch(fetchItemsSuccess(items));
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
  }
};