import { HIDE_ADD_ITEM_MODAL_ACTION } from "./actions";
import { SHOW_ADD_ITEM_MODAL_ACTION } from "./actions";
import { UPDATE_USER_MODAL_ACTION } from "./actions";
import { SET_IS_REGISTERED_ACTION } from "./actions";

const initialState = {
    isAddItemModalVisible: false,
    isRegistered: false,
    user: {},
    TotalPrice:0,
}
export const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case HIDE_ADD_ITEM_MODAL_ACTION:
            return {
                ...state,
                isAddItemModalVisible: false,
            }
        case SHOW_ADD_ITEM_MODAL_ACTION:
            return {
                ...state,
                isAddItemModalVisible: true,
            }
        case UPDATE_USER_MODAL_ACTION:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.userModal,
                }
            }
            case SET_IS_REGISTERED_ACTION:
            return {
                ...state,
                isRegistered: action.isRegistered,
            }
        default:
            return state;
    }
}