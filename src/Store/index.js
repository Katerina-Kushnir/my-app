import { createStore, combineReducers } from 'redux';
import { itemsReducer } from './Items/reducer';
import { appReduser } from './App/reduser';

export const store = createStore(combineReducers({
    items: itemsReducer,
    app: appReduser,
}))
