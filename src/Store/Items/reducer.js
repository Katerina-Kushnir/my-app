import { ADD_ITEM_ACTION, DELETE_ITEM_ACTION, EDIT_ITEM_ACTION, SORT_ITEM_ACTION } from './actions';

import { v4 as uuidv4 } from 'uuid';

const initialState = {
    items: [
        {
            id: uuidv4(),
            title: 'яблоко',
            description: 'blabla',
            price: 20,
            categoryId: 0,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'банан',
            description: 'blabla',
            price: 20,
            categoryId: 0,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'лайм',
            description: 'blabla2',
            price: 90,
            categoryId: 2,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'клубника',
            description: 'blabla4',
            price: 110,
            categoryId: 3,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'помидор',
            description: 'blabla1',
            price: 170,
            categoryId: 3,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'апельсин',
            description: 'blabla2',
            price: 45,
            categoryId: 1,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'киви',
            description: 'blabla4',
            price: 60,
            categoryId: 2,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'огурец',
            description: 'blabla1',
            price: 80,
            categoryId: 0,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'перец',
            description: 'blabla1',
            price: 120,
            categoryId: 3,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'гречка',
            description: 'blabla5',
            price: 45,
            categoryId: 2,
            units: '1',
        },
        {
            id: uuidv4 (),
            title: 'рис',
            description: 'blabla5',
            price: 40,
            categoryId: 1,
            units: '1',
        },
        {
            id: uuidv4 (),
            title: 'булгур',
            description: 'blabla',
            price: 35,
            categoryId: 0,
            units: '1',
        },
    ],
    sortItems: []
}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_ACTION:
            return {
                items: [...state.items, action.item]
            };
        case DELETE_ITEM_ACTION:
            return {
                items: state.items.filter((item) => item.id !== action.id)
            };
        case EDIT_ITEM_ACTION:
            return {  
            };
        case SORT_ITEM_ACTION:
            return {...state, sortItems: state.items.slice().sort((a, b) => a.title > b.title ? 1 : -1)}
        default:
            return state;
    }
}