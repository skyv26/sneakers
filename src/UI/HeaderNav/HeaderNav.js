import React from 'react';
import styles from './HeaderNav.module.css';

const HeaderNav = (props) => {
    return (
        <header className={styles.HeaderNav}>
            {props.children}
        </header>
    );
}

export default HeaderNav;