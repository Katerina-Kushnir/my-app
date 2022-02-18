import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { ItemComponent } from "../ItemComponent/ItemComponent";
import { selectItems } from '../../Store/Items/selectors';
import { deleteItemAction } from '../../Store/Items/actions'

export const ItemsList = () => {
    const items = useSelector(selectItems);

    const dispatch = useDispatch();

    const onDeleteElement = useCallback((id) => 
        dispatch(deleteItemAction({ id })), 
        [dispatch])
    return (
        <table>
            <tbody>
                {items.map((item) => <ItemComponent onDeleteClicked = {onDeleteElement} key={item.id} item={item}/>)}
            </tbody>
        </table>
    )
}