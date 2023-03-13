import React from 'react';
import loader from '../images/Eclipse_loader.gif'
import styles from './preloader.module.css'


const Preloader = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt="" className={styles.loader}/>
        </div>
    );
};

export default Preloader;