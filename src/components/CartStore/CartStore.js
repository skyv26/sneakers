import React, { useContext } from "react";
import CartContext from '../../store/cart-context';
import DeleteIcon from '../../images/icon-delete.svg';

import styles from './CartStore.module.css';

const CartStore = (props) => {
    const cartCtx = useContext(CartContext);

    const isCartEmpty = !(cartCtx.totalItems > 0);

    const deleteShoppingListHandler = () => {
        cartCtx.resetObj();
    };


    const ShoppingItem = (props) => {
        return (
            <div className={styles.ShoppingItem}>
                <img src={props.sneaker.img.ProductImageThumb1} alt="random sneaker" />
                <div className={styles.Sneaker}>
                    <p className={styles.SneakerDesc}>{props.sneaker.desc}</p>
                    <p className={styles.PriceQty}>${parseFloat(props.sneaker.price).toFixed(2)} x {props.totalqty} <span><strong>${parseFloat(props.sneaker.price * props.totalqty).toFixed(2)}</strong></span></p>
                </div>
                <img src={DeleteIcon} alt="random sneaker" onClick={deleteShoppingListHandler} />
            </div>
        );
    }

    return (
        <div className={styles.CartVault}>
            <h5>Cart</h5>
            <div className={styles.Vault} style={{height: cartCtx.totalItems ? 'auto' : '100%'}}>
                <div className={styles.InnerContainer}>
                    {isCartEmpty ? <p className={styles.EmptyText}>Your cart is empty.</p> : <ShoppingItem sneaker={cartCtx.items[cartCtx.items.length-1]} totalqty={cartCtx.totalItems} ></ShoppingItem>}
                </div>
                {cartCtx.totalItems ? <button className={styles.CheckoutBtn}>Checkout</button> : ""}
            </div>
        </div>
    );
};

export default CartStore;