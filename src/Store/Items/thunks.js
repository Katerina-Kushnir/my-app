import { 
    fetchItemsActionRequest, 
    fetchItemsActionSuccess, 
    fetchItemsActionFailure,
    deleteItemActionReguest,
    deleteItemActionSuccess,
    deleteItemActionFailure,
    addItemActionReguest,
    addItemActionSuccess,
    addItemActionFailure,
    editItemActionReguest,
    editItemActionSuccess,
    editItemActionFailure,
 } from "./actions";

const baseUrl = 'http://127.0.0.1:8080';

export const addItemAction = (item) => {
    return async (dispatch) => {
        dispatch(addItemActionReguest(item));
        try {
            const response = await fetch([baseUrl, 'goods'].join('/'), 
            { 
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)
            });
            console.log('response: ', response)
            if (response.ok) {
                const data = await response.json();
                console.log('response: ', data)
                dispatch(addItemActionSuccess(data));
            } else {
                dispatch(addItemActionFailure('Something went wrong'));
            }
        } catch (error) {
            dispatch(addItemActionFailure(error.message));
        }
    }
}
export const editItemAction = (id, item) => {
    return async (dispatch) => {
        dispatch(editItemActionReguest());
        try {
            const response = await fetch([baseUrl, 'goods', id].join('/'), 
            { 
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)
            });
            console.log('response: ', response)
            if (response.ok) {
                const data = await response.json();
                console.log('response: ', data)
                dispatch(editItemActionSuccess(data));
            } else {
                dispatch(editItemActionFailure('Something went wrong'));
            }
        } catch (error) {
            dispatch(editItemActionFailure(error.message));
        }
    }
}

export const deleteItemAction = (id) => {
    return async (dispatch) => {
        dispatch(deleteItemActionReguest(id));
        try {
            const response = await fetch([baseUrl, 'goods', id].join('/'), { method: 'DELETE'});
            console.log('response: ', response)
            if (response.ok) {
                const data = await response.json();
                console.log('response: ', data)
                dispatch(deleteItemActionSuccess(id));
            } else {
                dispatch(deleteItemActionFailure('Something went wrong'));
            }
        } catch (error) {
            dispatch(deleteItemActionFailure(error.message));
        }
    }
}

export const fetchItems = () => {
    return async (dispatch) => {
        dispatch(fetchItemsActionRequest());
        try {
            const response = await fetch(baseUrl + '/goods');
            console.log('response:', response);
            if (response.ok) {
                const data = await response.json();
                console.log('data:', data);
                dispatch(fetchItemsActionSuccess (data.goods));
            } else {
                dispatch(fetchItemsActionFailure('Something is wrong'));
            }
        }
        catch(error) {
            dispatch(fetchItemsActionFailure(error.message));
        }
    }
}