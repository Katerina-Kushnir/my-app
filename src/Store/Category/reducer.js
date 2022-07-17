import { ADD_CATEGORY_ACTION, DELETE_CATEGORY_ACTION, UPDATE_CATEGORY_ACTION } from './actions';

const initialState = {
    categories: {
        0: {
            id: 0,
            name: 'фрукты'
        },
        1: {
            id: 1,
            name: 'овощи'
        },
        2: {
            id: 2,
            name: 'крупы'
        },
        3: {
            id: 3,
            name: 'напитки'
        }
    }
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