import {
    DELETE_ITEM_ACTION_REQUEST,
    DELETE_ITEM_ACTION_SUCCESS,
    DELETE_ITEM_ACTION_FAILURE,

    FETCH_ITEMS_ACTION_SUCCESS,
    FETCH_ITEMS_ACTION_REQUEST,
    FETCH_ITEMS_ACTION_FAILURE,

    ADD_ITEM_ACTION_REQUEST,
    ADD_ITEM_ACTION_SUCCESS,
    ADD_ITEM_ACTION_FAILURE,

    EDIT_ITEM_ACTION_REQUEST,
    EDIT_ITEM_ACTION_SUCCESS,
    EDIT_ITEM_ACTION_FAILURE,
} from './actions';

const initialState = {
    items: [],
    error: null,
    isItemsLoading: false,
    removingItems: {},
    removingItemsError: {},
    isAddingItem: false,
    isAddingItemError: null,
    isEditingItem: false,
    editingItemError: null,
    isEditingItemSuccess: null,
}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_ACTION_REQUEST:
            return {
                ...state, isItemsLoading: true, error: null
            }
        case FETCH_ITEMS_ACTION_SUCCESS:
            return {
                ...state, items: action.items, isItemsLoading: false
            };
        case FETCH_ITEMS_ACTION_FAILURE:
            return {
                ...state, isItemsLoading: false, error: action.error
            };
        case DELETE_ITEM_ACTION_REQUEST:
            return {
                ...state,
                removingItems: {
                    ...state.removingItems,
                    [action.id]: true,
                },
                removingItemsError: {
                    ...state.removingItemsError,
                    [action.id]: null,
                },
            };
        case DELETE_ITEM_ACTION_SUCCESS:
            return {
                ...state,
                removingItems: {
                    ...state.removingItems,
                    [action.id]: false,
                },
                items: state.items.filter((i) => i.id !== action.id),
            };
        case DELETE_ITEM_ACTION_FAILURE:
            return {
                ...state,
                removingItems: {
                    ...state.removingItems,
                    [action.id]: false,
                },
                removingItemsError: {
                    [action.id]: action.error,
                },
            };
        case ADD_ITEM_ACTION_REQUEST:
            return {
                ...state,
                isAddingItem: true,
                isAddingItemError: null,
            };
        case ADD_ITEM_ACTION_SUCCESS:
            return {
                ...state,
                isAddingItem: false,
                items: [...state.items, action.item],
            };
        case ADD_ITEM_ACTION_FAILURE:
            return {
                ...state,
                isAddingItemError: action.error,
                isAddingItem: false,
            };
        case EDIT_ITEM_ACTION_REQUEST:
            return {
                ...state,
                isEditingItem: true,
                isAddingItemError: null,
            };
        case EDIT_ITEM_ACTION_SUCCESS:
            return {
                ...state,
                isEditingItem: false,
                items: [...state.items, action.item],
                isEditingItemSuccess: true,
            };
        case EDIT_ITEM_ACTION_FAILURE:
            return {
                ...state,
                isAddingItemError: action.error,
                isEditingItem: false,
            };
        default:
            return state;
    }
}