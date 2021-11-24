import React from 'react';
import DescriptionCard from '../../UI/DescriptionCard/DescriptionCard';
import styles from './ProductDescription.module.css';
import ProductController from '../ProductController/ProductController';

const ProductDescription = (props) => {
    return (
        <DescriptionCard>
            <p className={styles.DescCardHeading}>sneaker company</p>
            <h2 className={styles.DescCardHeadingTitle}>fall limited edition sneakers</h2>
            <p className={styles.DescCardInfo}>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable
                rubber outer shoe, they'll withstand everything the weather can offer.
            </p>
            <div className={styles.ProductPrice}>
                <div>
                    <p>$125.00</p>
                    <p>50%</p>
                </div>
                <p className={styles.StrikedText}>$250.00</p>
            </div>
            <ProductController />
        </DescriptionCard>
    );
}

export default ProductDescription;