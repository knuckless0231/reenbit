import React from 'react';
import style from "./button.module.css";


const Button = (props:ButtonPropsTypes) => {
    const {name,callback} = props

    return (
        <span>
           <button onClick={callback} className={style.universalButton}>
               {name}
           </button>
        </span>
    );
};

export default Button;

// types
type ButtonPropsTypes = {
    name: string|number
    callback?: ()=>void
}