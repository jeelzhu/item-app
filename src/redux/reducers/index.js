import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  // Add other reducers here
});

export default rootReducer;