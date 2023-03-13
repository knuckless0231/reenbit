import React from 'react';
import styles from './currentCharacter.module.css'
import back_arrow from '../../common/images/back_arrow.png'
import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/store";


const CurrentCharacterPage = () => {

    const chID = useParams<{ chID: string }>()

    const character = useAppSelector(state => state.characterReducer.results
        .find(ch => ch.id === +chID.chID!))


    if (!character) {
        return <div> 404 </div>
    } else {
        return (
            <div className={styles.mainContainer}>

                {/*goBackArrow*/}
                <div className={styles.arrowBlock}>
                    <Link to='/main'>
                        <img className={styles.arrow} src={back_arrow} alt="back"/>
                        <span className={styles.goBack}>GO BACK</span>
                    </Link>
                </div>
                {/*goBackArrow*/}

                <div className={styles.characterContainer}>
                    <div>
                        <img src={character.image} alt="" className={styles.img}/>
                    </div>

                    <div className={styles.nameContainer}>
                        {character.name}
                    </div>

                    <div className={styles.informations}>
                        Informations
                    </div>
                    <div>

                    </div>
                    <div className={styles.infoBlock}>
                        <span className={styles.lol}>
                            <div>Gender</div>
                            <div className={styles.gender}>{character.gender}</div>
                        </span>
                        <span className={styles.lol}>
                            <div>Status</div>
                            <div className={styles.gender}>{character.status}</div>
                        </span>
                        <span className={styles.lol}>
                            <div>Specie</div>
                            <div className={styles.gender}>{character.species}</div>
                        </span>
                        <span className={styles.lol}>
                            <div>Origin</div>
                            <div className={styles.gender}>{character.origin.name}</div>
                        </span>
                        <span className={styles.lol}>
                            <div>Type</div>
                            <div className={styles.gender}>
                                {/*тут перевірка на наявність типу персонажу, бо багато де нема*/}
                                {character.type ? character.type : character.gender}
                            </div>
                        </span>
                    </div>

                </div>
            </div>
        );
    }


};

export default CurrentCharacterPage;