import React from "react";
import { useCallback } from "react";
import './ItemComponent.css'
import { useParams } from "react-router-dom";

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
            <td>
                <button className="delete" onClick={onDeleteHandler}>Delete</button>
            </td>
            {/* <td>
                <button className="edit" onClick={onEditHandler}>Edit</button>
            </td> */}
        </tr>
    )
}