export const SHOW_ADD_ITEM_MODAL_ACTION = 'SHOW_ADD_ITEM_MODAL_ACTION';
export const HIDE_ADD_ITEM_MODAL_ACTION = 'HIDE_ADD_ITEM_MODAL_ACTION';
export const SHOW_EDIT_ITEM_MODAL_ACTION = 'SHOW_EDIT_ITEM_MODAL_ACTION';
export const HIDE_EDIT_ITEM_MODAL_ACTION = 'HIDE_EDIT_ITEM_MODAL_ACTION';
export const UPDATE_USER_MODAL_ACTION = 'UPDATE_USER_MODAL_ACTION';
export const SET_IS_REGISTERED_ACTION = 'SET_IS_REGISTERED_ACTION';

export const showAddItemModalAction = () => {
    return {
        type: SHOW_ADD_ITEM_MODAL_ACTION,
    }
}

export const hideAddItemModalAction = () => {
    return {
        type: HIDE_ADD_ITEM_MODAL_ACTION,
    }
}

export const showEditItemModalAction = (id) => {
    return {
        type: SHOW_EDIT_ITEM_MODAL_ACTION,
        id,
    }
}

export const hideEditItemModalAction = () => {
    return {
        type: HIDE_EDIT_ITEM_MODAL_ACTION,
    }
}

export const updateUserModalAction = (userModal) => {
    return {
        type: UPDATE_USER_MODAL_ACTION,
        userModal,
    }
}

export const setIsRegistered = (isRegistered) => {
    return {
        type: SET_IS_REGISTERED_ACTION,
        isRegistered,
    }
}