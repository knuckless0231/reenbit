import React from 'react';
import {Link} from "react-router-dom";
import style from './CurrentCharacter.module.css'


const CurrentCharacter = (props: any) => {

    const {ch} = props

    return (
        <div className={style.userBlock} key={ch.id}>
            <Link to={`/currentCharacter/${ch.id}`}>
                <img src={ch.image} alt="" className={style.userImg}/>
            </Link>
            <div>{ch.name}</div>
            <div>{ch.species}</div>
        </div>
    )
};

export default CurrentCharacter;