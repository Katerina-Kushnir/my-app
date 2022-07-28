import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { itemsReducer } from './Items/reducer';
import { appReduser } from './App/reduser';
import { setIsRegistered } from './App/actions';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

export const store = createStore(combineReducers({
    items: itemsReducer,
    // categories: categoriesReducer,
    app: appReduser,
}), applyMiddleware(logger, thunk));

const isRegistered = localStorage.getItem('isRegistered');
store.dispatch(setIsRegistered(isRegistered === 'true'));
