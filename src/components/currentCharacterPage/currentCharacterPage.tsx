import React, {useEffect} from 'react';
import styles from './currentCharacter.module.css'
import back_arrow from '../../common/images/back_arrow.png'
import rick from '../../common/images/rick.png'
import {Link, useParams} from "react-router-dom";
import {FetchCurrentUserTC} from "../../redux/reducer";
import {useAppDispatch} from "../../redux/store";


const CurrentCharacterPage = () => {

    const chID = useParams()
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(FetchCurrentUserTC(+chID))
    },[dispatch])



    return (
        <div className={styles.mainContainer}>
            {/*goBackArrow*/}
            <Link to='/main'>
                <div>
                    <img className={styles.arrow} src={back_arrow} alt="back"/>
                    <span className={styles.goBack}>GO BACK</span>
                </div>
            </Link>
            {/*goBackArrow*/}

            <div className={styles.characterContainer}>
                {/*!!!!!!!!!!!!!!!!!!!! hardcode*/}
                <div>
                    <img src={rick} alt="" className={styles.img}/>
                </div>

                <div className={styles.nameContainer}>
                    Kostya Kokhanov
                </div>

                <div className={styles.informations}>
                    Informations
                </div>

                <div className={styles.infoBlock}>
                        <span className={styles.lol}>
                            <div>gender</div>
                            <div className={styles.gender}>male</div>
                        </span>
                    <span className={styles.lol}><div>gender</div><div>male</div></span>
                    <span className={styles.lol}><div>gender</div><div>male</div></span>
                    <span className={styles.lol}><div>gender</div><div>male</div></span>
                    <span className={styles.lol}><div>gender</div><div>male</div></span>
                </div>

            </div>

        </div>
    );
};

export default CurrentCharacterPage;