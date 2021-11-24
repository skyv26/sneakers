import React, { Fragment, useContext, useState } from 'react';
import ReactDom from 'react-dom';
import HeaderNav from '../../UI/HeaderNav/HeaderNav';
import styles from './ProductNavigation.module.css';
import NavButtonImage from '../../images/icon-menu.svg';
import ShoppingCartImage from '../../images/icon-cart.svg';
import UserProfileAvatar from '../../images/image-avatar.png';
import CloseMenuIcon from '../../images/icon-close.svg';
import CartContext from '../../store/cart-context';
import CartStore from '../CartStore/CartStore';
import ModalOverlay from '../../UI/ModalOverlay/ModalOverlay'
import Logo from '../../images/logo.svg';


const ProductNavigation = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.totalItems;

    const [currentVisibility, updatedState] = useState(false);
    const [currentCartVisible, updatedCartVisible]  = useState(false);
    const [circleVisible, updatedCircleVisible] = useState(false);

    const MainBarMenu = () => {
        return (
            <div className={`${styles.MobileView}`}>
                <button className={styles.CloseButton} onClick={() => {
                    updatedState(false);
                }}>
                    <img src={CloseMenuIcon} alt="close menu icon" />
                </button>
                <ul className={styles.Menu}>
                    <li><a href=".">Collections</a></li>
                    <li><a href=".">Men</a></li>
                    <li><a href=".">Women</a></li>
                    <li><a href=".">About</a></li>
                    <li><a href=".">Contact</a></li>
                </ul>
            </div>
        );
    }

    const SideBarMenu = () => {
        return (
            <div className={`${styles.MenuContainer}`}>
                <button className={styles.CloseButton} onClick={() => {
                    updatedState(false);
                }}>
                    <img src={CloseMenuIcon} alt="close menu icon" />
                </button>
                <ul className={styles.Menu}>
                    <li><a href=".">Collections</a></li>
                    <li><a href=".">Men</a></li>
                    <li><a href=".">Women</a></li>
                    <li><a href=".">About</a></li>
                    <li><a href=".">Contact</a></li>
                </ul>
            </div>
        );
    }

    const ModalContainer = () => {
        return (
            <ModalOverlay>
                <SideBarMenu />
            </ModalOverlay>
        );
    }

    const menuHandler = () => {
        updatedState(true);
        updatedCartVisible(false);
    };

    const cartVaultHandler = () => {
        updatedCartVisible((prevState) => {
            return !prevState;
        });
    }

    return (
        <Fragment>
            <HeaderNav>
                <button className={styles.NavButton} onClick={menuHandler}>
                    <img src={NavButtonImage} alt="Mobile menu navigation button" />
                </button>
                {currentVisibility ? ReactDom.createPortal(<ModalContainer />, document.getElementById('modal-overlay')) : ''}
                <img src={Logo} alt="sneakers logo" className={styles.HeaderLogo} />
                <MainBarMenu />
                <div className={styles.RightDivision}>
                    <div className={styles.CartBlock} onClick={cartVaultHandler} >
                        <img src={ShoppingCartImage} alt="Shopping cart" className={styles.HeaderIcons} />
                        {numberOfCartItems > 0 ? <span>{numberOfCartItems}</span> : ''}
                    </div>

                    <div className={styles.CartBlock} 
                        onMouseEnter={(e) => {
                            updatedCircleVisible(true);
                        }}
                        onMouseLeave={(e) => {
                            updatedCircleVisible(false);
                        }}
                    >
                        {circleVisible ? <div className={`${styles.ImageBorderCircle}`}></div> : ''}
                        <img src={UserProfileAvatar} alt="User profile avatar" className={`${styles.HeaderIconsImage}`} />
                    </div>
                </div>
            </HeaderNav>
            {currentCartVisible ? <CartStore /> : ''}
        </Fragment>
    );
};

export default ProductNavigation;