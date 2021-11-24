import React from 'react';
import Corousal from '../../UI/Corousal/Corousal';
import ProductImage1 from '../../images/image-product-1.jpg';
import ProductImage2 from '../../images/image-product-2.jpg';
import ProductImage3 from '../../images/image-product-3.jpg';
import ProductImage4 from '../../images/image-product-4.jpg';


import styles from './ProductCorousal.module.css';

const ProductCorousal = (props) => {

    // const DisplayProduct = () => {
    //     return (
            
    //     );
    // }

    return (
        <Corousal>
            <img src={ProductImage1} alt="Product view 1" className={styles.DisplayImage} />
            <img src={ProductImage2} alt="Product view 2" className={styles.DisplayImage} />
            <img src={ProductImage3} alt="Product view 3" className={styles.DisplayImage} />
            <img src={ProductImage4} alt="Product view 4" className={styles.DisplayImage} />
        </Corousal>
    );
}

export default ProductCorousal;