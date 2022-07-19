import React from "react";
import { useCallback } from "react";
import './ItemComponent.css'
import { useParams } from "react-router-dom";

// import Button from '@mui/material/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@mui/material/IconButton';

export const ItemComponent = ({ item, onDeleteClicked = () =>{}, onCategoryClicked = () => {}, onEditClicked = () => {} }) => {
    const onDeleteHandler = useCallback(() => {onDeleteClicked(item.id)}, [onDeleteClicked, item.id])
    const onCategoryHandler = useCallback(() => {
        onCategoryClicked(item.categoryId)
    }, [item.categoryId, onCategoryClicked])
    // const onEditHandler = useCallback(() => {onEditClicked(item.id)}, [onEditClicked, item.id])
    const categ = useParams()
    console.log(categ)
    return (
        <tr>
            <td className="clickable" onClick={onCategoryHandler}>{item.category}</td>
            <td>{item.description}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.units}</td>
            <IconButton aria-label="delete" size="large" onClick={onDeleteHandler}>
                <DeleteIcon />
            </IconButton>
            {/* <td>
                <button className="edit" onClick={onEditHandler}>Edit</button>
            </td> */}
        </tr>
    )
}