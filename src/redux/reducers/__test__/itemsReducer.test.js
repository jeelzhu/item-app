import itemsReducer from '../itemsReducer';
import * as types from '../../constants/actionTypes';

describe('Items Reducer', () => {
    it('should return the initial state', () => {
        const expectedState = {
            itemsState: {
                items: [],
                loading: false, 
                error: null,  
            } 
        };
        expect(itemsReducer(undefined, {})).toEqual(expectedState);
    });

    it('should handle FETCH_ITEMS_REQUEST', () => {
        const action = { type: types.FETCH_ITEMS_REQUEST };
        const initialState = {
            items: [],
            loading: false,
            error: null,
        };
        const expectedState = {
            itemsState: {
                items: [],
                loading: true, 
                error: null,  
            } 
        };
        console.log(itemsReducer(initialState, action));
        expect(itemsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle FETCH_ITEMS_SUCCESS', () => {
        const items = [{ id: 1, name: 'Item 1' }];
        const expectedState = {
            itemsState: {
                items,
                loading: false, 
                error: null,  
            } 
        };
        expect(itemsReducer(undefined, { type: types.FETCH_ITEMS_SUCCESS, payload: items }))
        .toEqual(expectedState);
    });

    it('should handle FETCH_ITEMS_FAILURE', () => {
        const error = 'Error fetching items';
        const expectedState = {
            itemsState: {
                items: [],
                loading: false, 
                error,
            } 
        };
        expect(itemsReducer(undefined, { type: types.FETCH_ITEMS_FAILURE, payload: error }))
        .toEqual(expectedState);
    });
});