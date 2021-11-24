import React, { useContext, useReducer } from 'react';
import styles from './ProductController.module.css';
import AddQuantity from '../../images/icon-plus.svg';
import ReduceQuantity from '../../images/icon-minus.svg';
import AddToCart from '../../images/icon-cart.svg';
import ProductImageThumb1 from '../../images/image-product-1-thumbnail.jpg';
import CartContext from '../../store/cart-context';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
}


function changeQuantity(currentState, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { initQuantity: currentState.initQuantity + 1 };
        case ACTIONS.DECREMENT:
            if (currentState.initQuantity < 1)
                return { initQuantity: 0 };
            else
                return { initQuantity: currentState.initQuantity - 1 }
        case ACTIONS.RESET:
            return { initQuantity: 0 }
        default:
            return currentState;
    }
}

const ProductController = (props) => {
    const CartCtx = useContext(CartContext);
    const [currentState, dispatch] = useReducer(changeQuantity, { initQuantity: 0 });

    const incrementHandler = () => {
        dispatch({ type: ACTIONS.INCREMENT });
    }

    const decrementHandler = () => {
        dispatch({ type: ACTIONS.DECREMENT });
    }

    const addToCartHandler = () => {
        if (currentState.initQuantity > 0) {
            dispatch({ type: ACTIONS.RESET });
            CartCtx.addItem({
                price: 125,
                qty: currentState.initQuantity,
                desc: "Autumn Limited Edition...",
                img: { ProductImageThumb1 }
            })
        }
    }

    return (
        <div className={styles.ProductController}>
            <div className={styles.ProductVariation}>
                <img src={ReduceQuantity} alt="decrement quantity" onClick={decrementHandler} />
                <p className={styles.ProductQuantity}>{currentState.initQuantity}</p>
                <img src={AddQuantity} alt="increment quantity" onClick={incrementHandler} />
            </div>
            <button className={styles.PlaceOrderBtn} onClick={addToCartHandler}>
                <img src={AddToCart} alt="add to cart" />
                <span>Add to cart</span>
            </button>
        </div>
    );
}

export default ProductController;