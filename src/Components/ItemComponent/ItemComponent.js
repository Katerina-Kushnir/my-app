import { useCallback } from "react"

export const ItemComponent = ({ item, onDeleteClicked = () =>{} }) => {
    const onDeleteHandler = useCallback(() => {onDeleteClicked(item.id)}, [onDeleteClicked, item.id])
    return (
        <tr>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>
                <button onClick={onDeleteHandler}>Delete</button>
            </td>
        </tr>
    )
}