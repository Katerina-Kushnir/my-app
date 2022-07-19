import { v4 as uuidv4 } from 'uuid';

export const ADD_ITEM_ACTION = 'ADD_ITEM_ACTION';
export const DELETE_ITEM_ACTION = 'DELETE_ITEM_ACTION';
export const EDIT_ITEM_ACTION = 'EDIT_ITEM_ACTION';
export const SORT_ITEM_ACTION = 'SORT_ITEM_ACTION';
export const TOTAL_PRICE_ITEM_ACTION = 'TOTAL_PRICE_ITEM_ACTION';

export const addItemAction = ({ title, description, category, price, units }) => {
    return {
        type: ADD_ITEM_ACTION,
        item: {
            title,
            description,
            categoryId: category,
            price,
            units,
            id: uuidv4(),
        },
    }
}

export const deleteItemAction = ({ id }) => {
    return {
        type: DELETE_ITEM_ACTION,
        id,
    }
}

export const editItemAction = ({ editItem }) => {
    return {
        type: EDIT_ITEM_ACTION,
        editItem,
    }
}

export const totalPriceItemAction = ({ price, units }) => {
    return {
        type: TOTAL_PRICE_ITEM_ACTION,
        item: {
            price,
            units,
            id: uuidv4(),
        },
    }
}
