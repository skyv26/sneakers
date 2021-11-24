import React from 'react';
import styles from './Wrapper.module.css';

const Wrapper = (props) => {
    return (
        <section className={styles.Wrapper}>
            {props.children}
        </section>
    );
}

export default Wrapper;