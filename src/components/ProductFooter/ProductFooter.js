import React from 'react';
import styles from './ProductFooter.module.css';

function ProductFooter(props) {
    return (
        <div className={styles.Footer}>
            <p>Made with 🧡 by <a href="https://www.github.com/skyv26">Aakash Verma</a></p>
        </div>
    );
}

export default ProductFooter;
