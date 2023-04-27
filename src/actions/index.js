import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART, TOTAL_PRICE, DELETE_PERUNIT, ITEM_QUANTITY } from "../types";

export const addProduct = () => ({type:ADD_PRODUCT});
export const removeProduct = () => ({type:REMOVE_PRODUCT});
export const clearCart = () => ({type:CLEAR_CART});
export const totalPrice = () => ({type:TOTAL_PRICE});
export const deletePerUnit = () => ({type:DELETE_PERUNIT});
export const itemQuantity = () => ({type:ITEM_QUANTITY});