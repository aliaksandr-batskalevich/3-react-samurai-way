import React from "react";
import s from "./Cats.module.css";
import nullAvatar from "../../../assets/images/nullAvatar.png";
import {CatsType} from "../../../redux/cats-reducer";
import {Preloader} from "../../commons/Preloader/Preloader";
import {NavLink} from "react-router-dom";

type CatsPropsType = {
    cats: CatsType
    totalPage: number
    currentPage: number
    toggleIsFetching: boolean
    followingInProgress: Array<number>

    follow: (id: number) => void
    unfollow: (id: number) => void
    setCurrentPage: (currentPage: number) => void
}

export const Cats: React.FC<CatsPropsType> = ({
                                                  cats,
                                                  totalPage,
                                                  currentPage,
                                                  toggleIsFetching,
                                                  follow,
                                                  unfollow,
                                                  setCurrentPage,
                                                  followingInProgress,

                                              }) => {
    const onClickFollowButtonHandler = (id: number) => {
        follow(id);
    };
    const onClickUnfollowButtonHandler = (id: number) => {
        unfollow(id);
    };
    const onClickPageHandler = (currentPage: number) => {
        setCurrentPage(currentPage);
    };

    // code for paginationRender
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }
    let indexOfCurrentPage = pages.indexOf(currentPage);

    // create new array for render pagination +/- 4
    let demoPages = pages.slice(currentPage > 5 ? indexOfCurrentPage - 5 : 0, currentPage + 6 >= pages.length ? undefined : indexOfCurrentPage + 6);

    let pagesToRender = demoPages.map((page, index) => {
        return (
            <span
                key={index}
                className={currentPage === page ? s.activePage : ''}
                onClick={() => onClickPageHandler(page)}
            >
                    {page}
                </span>
        )
    });

    let catsToRender = cats.map(el => {
        return (
            <div className={s.catWrapper} key={el.id}>
                <div className={s.avatarWrapper}>
                    <img src={el.photos.small !== null ? el.photos.small : nullAvatar} alt="avatar"/>
                    {el.followed
                        ? <button onClick={() => onClickUnfollowButtonHandler(el.id)} disabled={followingInProgress.some(id => id === el.id)}>UNFOLLOW</button>
                        : <button onClick={() => onClickFollowButtonHandler(el.id)} disabled={followingInProgress.some(id => id === el.id)}>FOLLOW</button>}
                </div>
                <div className={s.catInfoWrapper}>
                    <div className={s.firstColumn}>
                        <NavLink to={`/profile/${el.id}`}>
                            <h3>{el.name}</h3>
                        </NavLink>
                        <p className={s.status}>{el.status}</p>
                    </div>
                    <div className={s.secondColumn}>
                        <p className={s.cityInfo}>{'el.address.city'}</p>
                        <p className={s.countryInfo}>{'el.address.country'}</p>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className={s.catsPageWrapper}>
            <div className={s.pagesWrapper}>
                {pagesToRender}
            </div>
            {toggleIsFetching ? <Preloader/> : catsToRender}
        </div>
    )
};