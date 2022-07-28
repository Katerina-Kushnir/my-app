export const DELETE_ITEM_ACTION_REQUEST = 'DELETE_ITEM_ACTION_REQUEST';
export const DELETE_ITEM_ACTION_SUCCESS = 'DELETE_ITEM_ACTION_SUCCESS';
export const DELETE_ITEM_ACTION_FAILURE = 'DELETE_ITEM_ACTION_FAILURE';

export const FETCH_ITEMS_ACTION_REQUEST = 'FETCH_ITEMS_ACTION_REQUEST';
export const FETCH_ITEMS_ACTION_SUCCESS = 'FETCH_ITEMS_ACTION_SUCCESS';
export const FETCH_ITEMS_ACTION_FAILURE = 'FETCH_ITEMS_ACTION_FAILURE';

export const ADD_ITEM_ACTION_REQUEST = 'ADD_ITEMS_ACTION_REQUEST';
export const ADD_ITEM_ACTION_SUCCESS = 'ADD_ITEMS_ACTION_SUCCESS';
export const ADD_ITEM_ACTION_FAILURE = 'ADD_ITEMS_ACTION_FAILURE';

export const EDIT_ITEM_ACTION_REQUEST = 'EDIT_ITEMS_ACTION_REQUEST';
export const EDIT_ITEM_ACTION_SUCCESS = 'EDIT_ITEMS_ACTION_SUCCESS';
export const EDIT_ITEM_ACTION_FAILURE = 'EDIT_ITEMS_ACTION_FAILURE';

export const addItemActionReguest = (item) => {
    return {
        type: ADD_ITEM_ACTION_REQUEST,
        item,
    }
}
export const addItemActionSuccess = (item) => {
    return {
        type: ADD_ITEM_ACTION_SUCCESS,
        item,
    }
}
export const addItemActionFailure = (error) => {
    return {
        type: ADD_ITEM_ACTION_FAILURE,
        error
    }
}

export const deleteItemActionReguest = (id) => {
    return {
        type: DELETE_ITEM_ACTION_REQUEST,
        id
    }
}
export const deleteItemActionSuccess = (id) => {
    return {
        type: DELETE_ITEM_ACTION_SUCCESS,
        id
    }
}
export const deleteItemActionFailure = (error) => {
    return {
        type: DELETE_ITEM_ACTION_FAILURE,
        error
    }
}

export const fetchItemsActionRequest= () => {
    return {
        type: FETCH_ITEMS_ACTION_REQUEST,
    }
}

export const fetchItemsActionFailure= (error) => {
    return {
        type: FETCH_ITEMS_ACTION_FAILURE,
        error, 
    }
}

export const fetchItemsActionSuccess = (dataArray) => {
    return {
        type: FETCH_ITEMS_ACTION_SUCCESS,
        items: dataArray,
    }
}

export const editItemActionReguest = () => {
    return {
        type: EDIT_ITEM_ACTION_REQUEST,
    }
}
export const editItemActionSuccess = (item) => {
    return {
        type: EDIT_ITEM_ACTION_SUCCESS,
        item,
    }
}
export const editItemActionFailure = (error) => {
    return {
        type: EDIT_ITEM_ACTION_FAILURE,
        error
    }
}