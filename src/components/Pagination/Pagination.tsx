import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../redux/store";
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import style from './pagination.module.css'

const Pagination = React.memo((props: PaginationPropsTypes) => {

    //local state for calculate page with pages of characters
    const [portionNumber, setPortionNumber] = useState(1)
    const {param, portionSize} = props
    const summaryCharacters = useAppSelector<number>(state => state.characterReducer.info.count)
    //mathematical formula for calculation total count of pages
    const totalPagesCount = Math.ceil(summaryCharacters / 20)
    let pagesCount = []

    for (let i = 1; i <= totalPagesCount; i++) {
        pagesCount.push(i)
    }

    let blockPortionsCount = Math.ceil(totalPagesCount / portionSize) // total block-portions count
    let leftPortionValue: number = (portionNumber - 1) * portionSize + 1 //left border of 1-st element
    let rightPortionNumber: number = portionNumber * portionSize //right border of last element

    // left and right arrows logic
    const prevPaginationHandler = () => {
        if (portionNumber > 1)
            setPortionNumber(portionNumber - 1)
    }
    const nextPaginationHandler = () => {
        if (portionNumber < blockPortionsCount)
            setPortionNumber(portionNumber + 1)
    }
    // left and right arrows logic

    useEffect(()=>{
        localStorage.setItem('pageNumber',param)
    },[param])

    return (
        <div className={style.paginationBlock}>
            <button className={style.button} onClick={prevPaginationHandler}>{`prev`}</button>
            {pagesCount.filter(p => {
                return p >= leftPortionValue && p <= rightPortionNumber
            }).map(pages => {
                return <span key={pages}>
                        <Link to={`/main/${pages}`}>
                            <Button name={pages} />
                        </Link>
                </span>
            })
            }
            <button className={style.button} onClick={nextPaginationHandler}>{`next`}</button>
        </div>
    );
});

export default Pagination;

//types

type PaginationPropsTypes = {
    param: string
    portionSize: number
}