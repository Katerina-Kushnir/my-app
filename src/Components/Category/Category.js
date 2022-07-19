import React from "react";
import { useCallback, useState } from "react"
import Button from '@mui/material/Button';
import './Category.css';

export const Category = ({ cat, onSave = () => { } }) => {
    const [categoryName, setCategoryName] = useState(cat.name);

    const onCategoryNameChange = useCallback((event) => {
        setCategoryName(event.target.value)
    }, [])

    const onSaveClicked = useCallback(() => {
        onSave({
            ...cat,
            name: categoryName,
        })
    })

    return (
        <tr>
            {/* <td>{cat.id}</td> */}
            <td><input value={categoryName} onChange={onCategoryNameChange} /></td>
            <td><Button onClick={onSaveClicked} variant="outlined">Зберегти</Button></td>
        </tr>
    )
}