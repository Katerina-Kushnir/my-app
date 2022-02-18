import { useCallback, useState } from "react";
import { useDispatch } from "react-redux"; 
import { hideAddItemModalAction } from "../../Store/App/actions";
import { addItemAction } from '../../Store/Items/actions';

export const AddItemModal = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    const onAddItem = useCallback(() => {
        dispatch(addItemAction({
          title,
          category,
        }))
    }, [dispatch, title, category])

    const onTitleChanged = useCallback((event) => {
        setTitle(event.target.value);
    }, [])

    const onCategoryChanged = useCallback((event) => {
        setCategory(event.target.value);
    }, [])

    const onHideModal = useCallback(() => {
        dispatch(hideAddItemModalAction())
    }, [dispatch])
    return (
        <div>
            <div>Title:</div>
            <input value={title} onChange={onTitleChanged}/>
            <div>Category:</div>
            <input value={category} onChange={onCategoryChanged}/>
            <br/>
            <button onClick={onAddItem}>Add Item</button>
            <button onClick={onHideModal}>Close</button>
        </div>
    )
}