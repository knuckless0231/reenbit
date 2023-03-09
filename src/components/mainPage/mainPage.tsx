import React, {useEffect} from 'react';
import rickMortyLogo from "../../common/images/rick_and_morty_logo.png";
import style from './mainPageStyles.module.css'
import {FetchAllCharactersTC} from "../../redux/reducer";
import {useAppDispatch, useAppSelector} from "../../redux/store";

const MainPage = () => {

    const dispatch = useAppDispatch()
    const character = useAppSelector(state => state.reducer.results)


    useEffect(() => {
        dispatch(FetchAllCharactersTC())
    }, [dispatch])

    return (
        <div className={style.mainContainer}>

            <div className={style.firstContainer}>
                <img className={style.rickMortyLogo} src={rickMortyLogo} alt="rick_and_morty_logo"/>
                <input className={style.inputWithSearchLogo} type="text" placeholder={'Filter by name...'}/>
            </div>

            <div className={style.secondContainer}>
                {character.map((ch) => {
                    return (
                        <div className={style.userBlock} key={ch.id}>
                            <img src={ch.image} alt="" className={style.userImg}/>
                            <div>{ch.name}</div>
                            <div>{ch.species}</div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default MainPage;