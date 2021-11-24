import React from 'react';
import styles from './ProductLayout.module.css';

const ProductLayout = (props) => {
    return (
        <div className={styles.Layout}>
            {props.children}
        </div>
    );
}

export default ProductLayout;