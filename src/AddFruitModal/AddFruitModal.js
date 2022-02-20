import React, { useState, useCallback } from 'react';
import './AddFruitModal.css';

export const AddFruitModal = (props) => {

    const [editName, setEditName] = useState(props.fruit?.name || '');
    const onEditItemName = useCallback((event) => {
        setEditName(event.target.value)
    }, [setEditName])

    const [editCategory, setEditCategory] = useState( props.fruit?.category || '');
    const onEditItemCategory = useCallback((event) => {
        setEditCategory(event.target.value)
    }, [setEditCategory])

    const [editPrice, setEditPrice] = useState( props.fruit?.price || '');
    const onEditItemPrice = useCallback((event) => {
        setEditPrice(event.target.value)
    }, [setEditPrice])

    return(
        <div className='modalForm'>
            <form onSubmit = {() => {
                props.fruit?.id ?
                props.onEditItemClick({name: editName, category: editCategory, price: editPrice, id: props.fruit.id}) :
                props.onAddItemClick({name: editName, category: editCategory, price: editPrice})
                }}>

                <p>Name:</p>
                <input value = { editName } onChange = {onEditItemName}/>
                <p>Category:</p>
                <input value = { editCategory } onChange = {onEditItemCategory}/>
                <p>Price:</p>
                <input value = { editPrice } onChange = {onEditItemPrice}/>
                <button>{ props.fruit?.id ? 'Edit' : 'Add' }</button>
                <button onClick={props.onCloseAddFruitModalClick}>Close</button>
            </form>
        </div>
    )
}
