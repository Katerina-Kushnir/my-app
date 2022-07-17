import React from "react";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { addItemAction } from '../../Store/Items/actions';
import { selectItems } from "../../Store/Items/selectors";

export const AddItemModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [units, setUnits] = useState('');

    const categories = useSelector(selectItems);

    const onAddItem = useCallback(() => {
        dispatch(addItemAction({      
          category,
          description,
          title,
          price,
          units,
        }))
        console.log(category, description, title, price, units,)
        navigate("/")
    }, [dispatch, title, description, category, price, units, navigate])

    const onTitleChanged = useCallback((event) => {
        setTitle(event.target.value);
    }, [])

    const onDescriptionChanged = useCallback((event) => {
        setDescription(event.target.value);
    }, [])

    const onCategoryChanged = useCallback((event) => {
        setCategory(event.target.value);
    }, [])

    const onPriceChanged = useCallback((event) => {
        setPrice(event.target.value);
    }, [])


    const onUnitsChanged = useCallback((event) => {
        setUnits(event.target.value);
    }, [])


    const onHideModal = useCallback(() => {
        navigate("/")
    }, [navigate])

    return (
        <div>
            <div>Category:</div>
            {/* <input value={category} onChange={onCategoryChanged}/> */}
            <select name="category" id="category"
                    value={category}
                    onChange={onCategoryChanged}>
                        <option value="-">-</option>
                        {/* {categories.map(category => <option key={category.id} value={category.id}> {category.name}</option>)} */}
                        for (const category in categories) {
  console.log(category)
}
            </select>
            <br/>
            <div>Description:</div>
            <input value={description} onChange={onDescriptionChanged}/>
            <br/>
            <div>Title:</div>
            <input value={title} onChange={onTitleChanged}/>
            <br/>
            <div>Price:</div>
            <input value={price} onChange={onPriceChanged}/>
            <br/>
            <div>Units:</div>
            <input value={units} onChange={onUnitsChanged}/>
            <br/>

            <button onClick={onAddItem}>Add Item</button>
            <button onClick={onHideModal}>Close</button>
        </div>
    )
}