import React from 'react';
import { useEffect, useCallback  } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { ItemComponent } from "../ItemComponent/ItemComponent";
import { selectItems, selectIsItemsLoading, selectItemsError, selectRemovingItems } from '../../Store/Items/selectors';
import { fetchItems, deleteItemAction } from '../../Store/Items/thunks';
import { showEditItemModalAction } from '../../Store/App/actions'; 
import './ItemsList.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const styles = {
    progress: { 
        display: 'flex',
        margin: 4,
    }
}
export const ItemsList = () => {
    const navigate = useNavigate();
    const items = useSelector(selectItems);
    const isItemsLoading = useSelector(selectIsItemsLoading);
    const itemsError = useSelector(selectItemsError);
    const removingItems = useSelector(selectRemovingItems);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch])

    const onDeleteElement = useCallback((id) =>
        dispatch(deleteItemAction(id)),
        [dispatch],
    )

    const onEditElement = useCallback((id) => {
        dispatch(showEditItemModalAction(id)),
        navigate('/edit/' + id)
    }, [dispatch, navigate])

    if (itemsError) {
        return (
            <div>{itemsError}</div>
        )
    }

    if (isItemsLoading) {
        return (
            <Box sx={styles.progress}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <div>
            <table>
                <tbody>
                    {items.map((item) => <ItemComponent
                        onDeleteClicked={onDeleteElement}
                        onEditClicked={onEditElement}
                        key={item.id}
                        item={item}
                        isRemoving={removingItems[item.id]}
                    />)}                
                </tbody>
            </table>
        </div>
    )

}
