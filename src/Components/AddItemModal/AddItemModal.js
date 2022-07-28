import React from "react";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { addItemAction } from '../../Store/Items/thunks';
import Button from '@mui/material/Button';
import './AddItemModal.css';

export const AddItemModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState('');

    const onAddItem = useCallback(() => {
        dispatch(addItemAction({      
          title,
          description,
          weight,
        }))
        navigate("/")
    }, [dispatch, title, description, navigate])

    const onTitleChanged = useCallback((event) => {
        setTitle(event.target.value);
    }, [])

    const onDescriptionChanged = useCallback((event) => {
        setDescription(event.target.value);
    }, [])

    const onWeightChanged = useCallback((event) => {
        setWeight(event.target.value);
    }, [])

    const onHideModal = useCallback(() => {
        navigate("/")
    }, [navigate])

    return (
        <div className="add-item">
            <div>Назва:</div>
            <input value={title} onChange={onTitleChanged}/>
            <br/>
            <div>Вага:</div>
            <input value={weight} onChange={onWeightChanged}/>
            <br/>
            <div>Опис:</div>
            <input value={description} onChange={onDescriptionChanged}/>
            <br/>

            <div className="add-item-button">
                <Button variant="contained" onClick={onAddItem}>
                    Додати товар
                </Button>
                <br />
                <Button variant="outlined" onClick={onHideModal}>
                    Закрити
                </Button>
            </div>
        </div>
    )
}