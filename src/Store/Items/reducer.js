import { ADD_ITEM_ACTION, DELETE_ITEM_ACTION } from './actions';


import { v4 as uuidv4 } from 'uuid';

const initialState = {
    items: [
        {
            id: uuidv4(),
            title: 'APPLE',
            category: 'fruit',
        },
        {
            id: uuidv4(),
            title: 'BANANA',
            category: 'fruit',
        },
        {
            id: uuidv4(),
            title: 'LIME',
            category: 'fruit',
        },
        {
            id: uuidv4(),
            title: 'STRAWBERRY',
            category: 'fruit',
        },
        {
            id: uuidv4(),
            title: 'TOMATO',
            category: 'vegetable',
        },
        {
            id: uuidv4(),
            title: 'ORANGE',
            category: 'fruit',
        },
        {
            id: uuidv4(),
            title: 'KIWI',
            category: 'fruit',
        },
        {
            id: uuidv4(),
            title: 'CUCUMBER',
            category: 'vegetable',
        },
        {
            id: uuidv4(),
            title: 'PEPPER',
            category: 'vegetable',
        },
    ]
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
        default:
            return state;
    }
}