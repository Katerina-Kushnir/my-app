import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategoriesArray } from "../../Store/Category/selectors";
import { Category } from "./Category";
import { updateCategoryAction } from "../../Store/Category/actions";

export const CategoriesList = () => {
    const categories = useSelector(selectCategoriesArray);
    const dispatch = useDispatch();

    const onSaveCategory = useCallback((category) => {
        dispatch(updateCategoryAction(category));
    }, [dispatch])

    return (
        <table>
            <tbody>
                {categories.map((cat) => {
                    return (
                        <Category key={cat.id} cat={cat} onSave={onSaveCategory} />
                    )
                })}
            </tbody>
        </table>
    )
}


