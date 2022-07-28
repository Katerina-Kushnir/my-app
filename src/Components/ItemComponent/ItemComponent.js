import React from "react";
import PropTypes from 'prop-types';
import { useCallback } from "react";
import './ItemComponent.css'
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, CircularProgress } from '@mui/material';

export const ItemComponent = ({ item, onDeleteClicked = () =>{}, onEditClicked = () =>{}, isRemoving }) => {
    const onDeleteHandler = useCallback(() => {onDeleteClicked(item.id)}, [onDeleteClicked, item.id])
    const onEditElement = useCallback(() => {onEditClicked(item.id)}, [onEditClicked, item.id])
    return (
        <tr>
            <td>{item.title}</td>
            <td>{item.weight}</td>
            <td>{item.description}</td>
            <td>{item.id}</td>
            
            <button onClick={onEditElement}>
                Редагувати
            </button>

            {isRemoving ? <CircularProgress /> : <IconButton aria-label="delete" size="large" onClick={onDeleteHandler}>
                <DeleteIcon />
            </IconButton> }
        </tr>
    )
}

ItemComponent.propTypes = {
    item: PropTypes.object,
    onDeleteClicked: PropTypes.func,
    onEditClicked: PropTypes.func,
    isRemoving: PropTypes.bool
}
