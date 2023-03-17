import React, {useCallback, useEffect} from 'react';
import rickMortyLogo from "../../common/images/rick_and_morty_logo.png";
import style from './mainPageStyles.module.css'
import {FetchCurrentPageTC} from "../../redux/character-reducer";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import Preloader from "../../common/preloader/Preloader";
import {SetFormValueAC} from "../../redux/search-name-reducer";
import CurrentCharacter from "../CurrentCharacterPage/CurrecntCharacter/CurrentCharacter";
import Pagination from "../Pagination/Pagination";
import {useParams} from "react-router-dom";
import {GetCurrentCharacterResponseType} from "../../data-access-layer/api";


const MainPage = () => {

    const dispatch = useAppDispatch()
    const characters = useAppSelector<GetCurrentCharacterResponseType[]>(state => state.characterReducer.results)
    const isFetching = useAppSelector<boolean>(state => state.characterReducer.isFetching)
    const searchValue = useAppSelector<string>(state => state.searchName.formValue)
    let param = useParams()
    const portionPageSize = 10;

    //form values
    const onChangeFormValueHandler = useCallback(function (event: React.ChangeEvent<HTMLInputElement>) {
        localStorage.setItem('inputValue', event.currentTarget.value);
        dispatch(SetFormValueAC(event.currentTarget.value))
    }, [dispatch])

    //filter values by search name
    const filteredCharacters = characters.filter(current => current.name.toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase()))

    //get item from Local Storage and dispatch to Redux
    useEffect(() => {
        const value = localStorage.getItem('inputValue')
        if (value !== null) {
            dispatch(SetFormValueAC(value))
        }
    }, [dispatch])

    //load users from server
    useEffect(() => {
        dispatch(FetchCurrentPageTC(+param.pageID!))
    }, [dispatch, param.pageID])


    return (
        <div className={style.mainContainer}>

            {/*logo, search container*/}
            <div className={style.firstContainer}>
                <img className={style.rickMortyLogo} src={rickMortyLogo} alt="rick_and_morty_logo"/>
                <form className={style.form}>
                    <input placeholder={'Filter by name...'}
                           className={style.inputWithSearchLogo}
                           onChange={(event) => onChangeFormValueHandler(event)}
                           value={searchValue}
                           autoFocus={true}
                    />
                </form>
            </div>

            {/*characters container*/}
            <div className={style.secondContainer}>
                {isFetching ? <div className={style.preloaderPage}><Preloader/></div>
                    : filteredCharacters.map((ch, index) => {
                        return <CurrentCharacter character={ch} key={index}/>
                    })
                }

            </div>

            {/*pagination*/}
            {!isFetching && <Pagination param={param.pageID!} portionSize={portionPageSize}/>}

        </div>
    );
};

export default MainPage;