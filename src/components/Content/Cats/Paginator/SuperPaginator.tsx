import React from 'react';
import s from './SuperPaginator.module.css';
import {useSelector} from "react-redux";
import {getPaginatorData} from "../../../../redux/selectors";
import {useAppDispatch} from "../../../../redux/hooks";
import {setCurrentPageTC} from "../../../../redux/cats-reducer";

type VectorType = 'down' | 'up';
type JumpType = 'byOne' | 'bigJump';
type PaginatorPropsType = {
    viewPagesOddNumber: number
    pageJumpPositive: number
};

const SuperPaginator: React.FC<PaginatorPropsType> = ({viewPagesOddNumber, pageJumpPositive}) => {

    // test odd num
    viewPagesOddNumber = viewPagesOddNumber % 2
        ? viewPagesOddNumber
        : viewPagesOddNumber + 1;

    // pageJumpPositive
    pageJumpPositive = pageJumpPositive < 0
        ? pageJumpPositive * -1
        : pageJumpPositive === 0
            ? 1
            : pageJumpPositive;


    let {catsOnPage, totalPage, currentPage} = useSelector(getPaginatorData);
    const dispatch = useAppDispatch();

    const setCurrentPageHandler = (newCurrentPage: number) => {
        newCurrentPage !== currentPage && dispatch(setCurrentPageTC(newCurrentPage, catsOnPage));
    };

    const setCurrentPageJumpHandler = (type: JumpType ,vector: VectorType) => {
        let jump = type === "bigJump" ? pageJumpPositive : 1;

        let newCurrentPage = currentPage + (vector === 'down' ? -jump : jump);
        let newCurrentPageToPush = (newCurrentPage < 1) ? 1 : (newCurrentPage > totalPage) ? totalPage : newCurrentPage;
        newCurrentPageToPush !== currentPage && dispatch(setCurrentPageTC(newCurrentPageToPush, catsOnPage));
    };

    const setFirstCurrentPageHandler = () => {
        currentPage !== 1 && dispatch(setCurrentPageTC(1, catsOnPage));
    };

    const setLastCurrentPageHandler = () => {
        currentPage !== totalPage && dispatch(setCurrentPageTC(totalPage, catsOnPage));
    };

    // creating pagesArray
    let leftRightLength = (viewPagesOddNumber + 1) / 2;
    let pagesToRender = [...new Array(viewPagesOddNumber)]
        .map((page, index) => index + 1 + (currentPage <= leftRightLength
            ? 0 : currentPage - leftRightLength))
        .filter(page => page <= totalPage)
        .map(page => {
            let className = currentPage === page ? s.currentPage : '';
            return (
                <div key={page} className={className} onClick={() => setCurrentPageHandler(page)}>{page}</div>
            )
        });

    return (
        <div className={s.paginatorWrapper}>
            <div className={s.jumpButtonLeft} onClick={setFirstCurrentPageHandler}>{1}</div>
            <div className={s.jumpButtonLeft} onClick={() => setCurrentPageJumpHandler("bigJump", 'down')}>{'<<'}</div>
            <div className={s.jumpButtonLeft} onClick={() => setCurrentPageJumpHandler("byOne", 'down')}>{'<'}</div>
            <div className={s.pagesWrapper}>{pagesToRender}</div>
            <div className={s.jumpButtonRight} onClick={() => setCurrentPageJumpHandler("byOne", 'up')}>{'>'}</div>
            <div className={s.jumpButtonRight} onClick={() => setCurrentPageJumpHandler("bigJump", 'up')}>{'>>'}</div>
            <div className={s.jumpButtonRight} onClick={setLastCurrentPageHandler}>{`... ${totalPage}`}</div>
        </div>
    );
};

export default SuperPaginator;