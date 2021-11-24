import React from "react";

const CartContext = React.createContext({
    items: [],
    totalItems: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    resetObj: () => {}
});

export default CartContext;