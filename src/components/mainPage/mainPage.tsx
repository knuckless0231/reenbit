import React, {useEffect} from 'react';
import rickMortyLogo from "../../common/images/rick_and_morty_logo.png";
import style from './mainPageStyles.module.css'
import {FetchAllCharactersTC} from "../../redux/character-reducer";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import Preloader from "../../common/preloader/Preloader";
import {SetFormValueAC} from "../../redux/search-name-reducer";
import {useDispatch} from "react-redux";
import CurrentCharacter from "../currentCharacterPage/currecntCharacter/CurrentCharacter";

const MainPage = () => {

    const dispatchAC = useDispatch()
    const dispatchTC = useAppDispatch()
    const characters = useAppSelector(state => state.characterReducer.results)
    const isFetching = useAppSelector(state => state.characterReducer.isFetching)
    const searchValue = useAppSelector(state => state.searchName.formValue)


    const onChangeFormValueHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatchAC(SetFormValueAC(event.currentTarget.value))
    }

    const filteredCharacters = characters.filter(current=>current.name.toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase()))


    useEffect(() => {
        dispatchTC(FetchAllCharactersTC())
    }, [dispatchTC])


    return (
        <div className={style.mainContainer}>

            <div className={style.firstContainer}>
                <img className={style.rickMortyLogo} src={rickMortyLogo} alt="rick_and_morty_logo"/>
                <form className={style.form}>
                    <input placeholder={'Filter by name...'}
                           className={style.inputWithSearchLogo}
                           onChange={(event) => onChangeFormValueHandler(event)}
                    />
                </form>
            </div>

            <div className={style.secondContainer}>
                    {isFetching ? <div className={style.preloaderPage}><Preloader/></div>
                    : filteredCharacters.map((ch,index) => {
                                return <CurrentCharacter ch={ch} key={index}/>
                            })
                    }

            </div>

        </div>
    );
};

export default MainPage;