import * as types from '../constants/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ITEMS_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case types.FETCH_ITEMS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
  
export default itemsReducer;