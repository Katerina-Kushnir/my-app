import {useDispatch, useSelector } from "react-redux";
import { SORT_ITEM_ACTION } from "../../Store/Items/actions";
import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

export const SortButton = () => {
    const dispatch = useDispatch();

    const {sortType} = useParams();
    const navigate = useNavigate();

    const onSort = (type) => {
        console.log('type:', type)
        navigate(`/sortPanel/${type}`);
    }
    useEffect(()=>{
        if (sortType) {
            dispatch({type: sortType});
        }
    }, [dispatch, sortType])


    return (
        <div>
            <button 
                onClick={() => onSort(SORT_ITEM_ACTION)}
            >Сортувати по назві
            </button>

        </div>
    )
}