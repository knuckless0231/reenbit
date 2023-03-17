import React from 'react';
import {Link} from "react-router-dom";
import style from './CurrentCharacter.module.css'
import {GetCurrentCharacterResponseType} from "../../../data-access-layer/api";


const CurrentCharacter = (props: CurrentCharacterPropsTypes) => {

    // current character
    const {character} = props

    return (
        <div className={style.userBlock} key={character.id}>
            <Link to={`/currentCharacter/${character.id}`}>
                <img src={character.image} alt="" className={style.userImg}/>
            </Link>
            <div>{character.name}</div>
            <div>{character.species}</div>
        </div>
    )
};

export default CurrentCharacter;

//types
type CurrentCharacterPropsTypes = {
    character:GetCurrentCharacterResponseType
}