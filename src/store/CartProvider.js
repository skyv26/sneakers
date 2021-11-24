import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
    items: [],
    totalItems: 0
}

const myReducer = (currentState, action) => {
    if(action.type === 'addData'){
        const updatedItems =  currentState.items.concat(action.item);
        const updatedTotalItems = currentState.totalItems + action.item.qty;
        return {items: updatedItems, totalItems: updatedTotalItems};
    }
    if(action.type === 'resetData'){
        return {items: [], totalItems: 0};
    }
    return currentState;
};

const CartProvider = (props) => {

    const [currentState, dispatchCartAction] = useReducer(myReducer, defaultState);
    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'addData', item: item});
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'removeData', payload: id});
    };

    const resetCartHandler = () => {
        dispatchCartAction({type: 'resetData'});
    }

    const cartContext = {
        items: currentState.items,
        totalItems: currentState.totalItems,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        resetObj: resetCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider> 
};

export default CartProvider;