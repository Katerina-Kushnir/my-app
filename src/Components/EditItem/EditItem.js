import React from "react";
import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectItems } from "../../Store/Items/selectors";
import { editItemActionFailure } from "../../Store/Items/actions";
import { showEditItemModalAction } from "../../Store/App/actions";
import { editItemAction } from "../../Store/Items/thunks";
import Button from '@mui/material/Button';
import './EditItem.css';

export const EditItem = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState('');

    const items = useSelector(selectItems);
    console.log('items:', items)
    const { itemId } = useParams();
    console.log('itemId:', itemId)
    
    useEffect(() => {
        const item = items.length ? items.find((item) => item.id === itemId) : { title: "", description: "", weight: "", };
        console.log('item:', item)
        if (item) {
            setTitle(item.title || "")
            setDescription(item.description || "")
            setWeight(item.weight || "")
            dispatch(showEditItemModalAction(item));
        } else {
            const error = new Error("Can not find item");
            dispatch(editItemActionFailure(error));
        }
    }, [items, dispatch])

    const onEditItem = useCallback((id) => {
        dispatch(editItemAction(
            itemId, 
            {
            title: title,
            description: description,
            weight: weight,
            category: ""
        }))
        navigate("/edit/" + id)
    }, [dispatch, title, description, weight, navigate])


    const onTitleChanged = useCallback((e) => {
        setTitle(e.target.value);
    }, [setTitle])

    const onDescriptionChanged = useCallback((e) => {
        setDescription(e.target.value);
    }, [setDescription])

    const onWeightChanged = useCallback((e) => {
        setWeight(e.target.value);
    }, [setWeight])

    const onHideModal = useCallback(() => {
        navigate("/")
    }, [navigate])

    return (
        <div className="edit-item">
            <div>Редагувати назву:</div>
            <input value={title} onChange={onTitleChanged} />
            <br />
            <div>Редагувати вагу:</div>
            <input value={weight} onChange={onWeightChanged} />
            <br />
            <div>Редагувати опис:</div>
            <input value={description} onChange={onDescriptionChanged} />
            <br />

            <div className="edit-item-button">
                <Button variant="contained" onClick={onEditItem}>
                    Змінити товар
                </Button>
                <br />
                <Button variant="outlined" onClick={onHideModal}>
                    Закрити
                </Button>
            </div>
        </div>
    )
}