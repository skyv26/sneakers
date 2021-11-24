import React from 'react';
import styles from './DescriptionCard.module.css';

const DescriptionCard = (props) => {
    return (
        <div className={styles.Desc}>
            {props.children}
        </div>
    );
}

export default DescriptionCard;