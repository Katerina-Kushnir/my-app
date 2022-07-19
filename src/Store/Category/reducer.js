import { ADD_CATEGORY_ACTION, DELETE_CATEGORY_ACTION, UPDATE_CATEGORY_ACTION } from './actions';

const initialState = {
    categories: [
        {
            id: 0,
            name: 'Побутова техніка'
        },
        {
            id: 1,
            name: 'Товари для спорту'
        },
        {
            id: 2,
            name: 'Товари для саду та огороду'
        },
        {
            id: 3,
            name: 'Дитячі товари'
        }
    ]
}

export const categoriesReducer = (state = initialState, action) => {
    console.log('action: ', action);
    console.log('category state: ', state);
    switch (action.type) {
        case ADD_CATEGORY_ACTION:
            return state;
        case DELETE_CATEGORY_ACTION:
            return state;
        case UPDATE_CATEGORY_ACTION:
            return {
                categories: {
                    ...state.categories,
                    [action.category.id]: action.category,
                }
            }
        default:
            return state;
    }
}