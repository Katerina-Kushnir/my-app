import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ItemComponent } from "../ItemComponent/ItemComponent";
import { selectItems } from '../../Store/Items/selectors';
import { selectCategories } from '../../Store/Category/selectors'
import { deleteItemAction } from '../../Store/Items/actions';
import './ItemsList.css'
import { TotalPrice } from '../TotalPrice/TotalPrice';

export const ItemsList = () => {
    const navigate = useNavigate();
    const items = useSelector(selectItems);
    const categories = useSelector(selectCategories);
    const { categoryId } = useParams();
    const categoryIdInt = parseInt(categoryId);
    const [itemsSort, setItemsSort] = useState([]);

    const {sortType} = useParams;
    const itemsToDisplay = useMemo(() => {
        let returnItems = [];
        if (categoryId) {
            returnItems = items.filter((i) => {
                console.log(i.categoryId)
                console.log(categoryId )
                return i.categoryId === categoryIdInt 
                
            });
        } else {
            returnItems = items;
        }
        console.log(returnItems)
        return returnItems.map((item) => {
            return {
                ...item,
                category: categories[item.categoryId].name,
            }
        })
    }, [items, categoryId, categories])

    const dispatch = useDispatch();

    const onDeleteElement = useCallback((id) =>
        dispatch(deleteItemAction({ id })),
        [dispatch]
    )

    const onCategoryClicked = useCallback((category) => {
        navigate('/items/' + category)
    }, [navigate])

    const onEditElement = useCallback((items) => {
        navigate('/element' + items)
    }, [navigate])

    const onSort = useCallback((type) => {
        navigate(type)
        // setItemsSort( [...items].sort((a, b) => a[value] > b[value] ? 1 : -1) );
    }, [setItemsSort, items])

    useEffect(() => {
        console.log("sortType: ", sortType)
    },[navigate, sortType])

    
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Категорія товару</th>
                        <th>Назва товару</th>
                        <th>Опис товару</th>
                        <th onClick={() => onSort('PRICE')}>Ціна</th>
                        <th>Кількість</th>
                    </tr>
                    {itemsToDisplay.map((item) => <ItemComponent
                        onDeleteClicked={onDeleteElement}
                        onCategoryClicked={onCategoryClicked}
                        onEditClicked={onEditElement}
                        key={item.id}
                        item={item}
                    />)}                
                </tbody>
            </table>

        <span>Total ${TotalPrice}</span>

        </div>
    )

}
