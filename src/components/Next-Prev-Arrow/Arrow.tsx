import React from 'react';
import styles from "./Arrow.module.css";
import {Link} from "react-router-dom";
import back_arrow from "../../common/images/back_arrow.png";


const Arrow = () => {
    return (
        <div>
            <div className={styles.arrowBlock}>
                <Link to='/main'>
                    <img className={styles.arrow} src={back_arrow} alt="back"/>
                    <span className={styles.goBack}>GO BACK</span>
                </Link>
            </div>
        </div>
    );
};

export default Arrow;