import { ADD_ITEM_ACTION, DELETE_ITEM_ACTION, EDIT_ITEM_ACTION, SORT_ITEM_ACTION, TOTAL_PRICE_ITEM_ACTION } from './actions';

import { v4 as uuidv4 } from 'uuid';

const initialState = {
    items: [
        {
            id: uuidv4(),
            title: 'Холодильник',
            description: 'Холодильник SAMSUNG RB38T600FSA/UA',
            price: 20500,
            categoryId: 0,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'Пральна машина',
            description: 'Пральна машина INDESIT OMTWSA 61052 W UA',
            price: 12000,
            categoryId: 0,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'Газонокосарка',
            description: 'Газонокосарка Gartner ELM-1232 BL (845269)',
            price: 3950,
            categoryId: 2,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'Конструктор',
            description: 'Конструктор LEGO DUPLO Classic Коробка з кубиками 65 деталей',
            price: 1210,
            categoryId: 3,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'Настільна гра',
            description: 'Настільна гра Spin Master Games L.O.L. Surprise Розкрий мій секрет',
            price: 670,
            categoryId: 3,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'Велосипед',
            description: 'Велосипед CORRADO Fortun 26" 21" 2019',
            price: 11999,
            categoryId: 1,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'Набір інструментів для садових рослин',
            description: 'Набір інструментів для садових рослин Gardena Balcony Basics',
            price: 1060,
            categoryId: 2,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'Блендер',
            description: 'Блендер BOSCH MSM66130',
            price: 1800,
            categoryId: 0,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'Самокат',
            description: 'Самокат Miqilong Cart',
            price: 1620,
            categoryId: 3,
            units: '1',
        },
        {
            id: uuidv4(),
            title: 'Зрошувач для поливу',
            description: 'Зрошувач Water Sprinklers 360 для поливу 360°',
            price: 345,
            categoryId: 2,
            units: '1',
        },
        {
            id: uuidv4 (),
            title: 'Мяч для фитнесу',
            description: 'Мяч для фитнесу PowerPlay 4003 65 см',
            price: 640,
            categoryId: 1,
            units: '1',
        },
        {
            id: uuidv4 (),
            title: 'Праска',
            description: 'Праска PHILIPS Azur GC4909/60',
            price: 3500,
            categoryId: 0,
            units: '1',
        },
    ],
    sortItems: [],
    TotalPrice:0,
}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_ACTION:
            return {
                items: [...state.items, action.item]
            };
        case DELETE_ITEM_ACTION:
            return {
                items: state.items.filter((item) => item.id !== action.id)
            };
        case EDIT_ITEM_ACTION:
            return {  
            };
        case SORT_ITEM_ACTION:
            return {
                ...state, sortItems: state.items.slice().sort((a, b) => a.title > b.title ? 1 : -1)
            };
        case TOTAL_PRICE_ITEM_ACTION:
            return {
                TotalPrice: state.items.reduce((acc, items) => acc + (items.price * items.units))
            };
        default:
            return state;
    }
}