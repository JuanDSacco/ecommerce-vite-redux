import { 
ADD_PRODUCT,
REMOVE_PRODUCT, 
CLEAR_CART,
TOTAL_PRICE, 
DELETE_PERUNIT, 
ITEM_QUANTITY 
} from "../types";

export const initialState = { 
    products: [
        {id:1,name:'Producto1',price:200},
        {id:2,name:'Producto2',price:10},
        {id:3,name:'Producto3',price:2220},
        {id:4,name:'Producto4',price:100},
        {id:5,name:'Producto5',price:400},
        {id:6,name:'Producto6',price:200},
    ],
    cart:[]
}

export default function cartReducer (state=initialState,action){

    const isInCart = (id) => (state.find((data) => data.id === id) ? true : false);

    switch(action.type){
        case TOTAL_PRICE:
            return state.reduce((acc, data) => (acc += data.cantidad * data.precio), 0);
        case ITEM_QUANTITY:
            return state.reduce((acc, data) => (acc += data.cantidad), 0);
        case CLEAR_CART:
            return setCart([]);
        case REMOVE_PRODUCT(id):
            return setCart(state.filter((data) => data.id !== id));
        case DELETE_PERUNIT(id):
            return setCart(
                state.map((data) => {
                    if (data.id === id) {
                    return { ...data, cantidad: data.cantidad - 1 };
                    } else {
                    return data;
                    }
                })
                );
        case ADD_PRODUCT(item, cantidad):
            if (isInCart(item.id)) {
                setCart(
                    state.map((data) => {
                    return data.id === item.id
                        ? { ...data, cantidad: data.cantidad + cantidad }
                        : data;
                    })
                );
                }else {
                setCart([...state, { ...item, cantidad }]);
                }
        default: return state;
            };
    }   
