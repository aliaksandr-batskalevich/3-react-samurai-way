import React from 'react';
import s from './Cat.module.css'
import nullAvatar from "../../../../assets/images/nullAvatar.png";
import {NavLink} from "react-router-dom";
import {CatType} from "../../../../redux/cats-reducer";

type CatPropsType = {
    cat: CatType
    follow: (id: number) => void
    unFollow: (id: number) => void
    isFollowingInProgress: boolean
}

export const Cat: React.FC<CatPropsType> = ({cat, follow, unFollow, isFollowingInProgress}) => {

    const onClickUnfollowButtonHandler = () => {
        unFollow(cat.id);
    };
    const onClickFollowButtonHandler = () => {
        follow(cat.id);
    };

    return (
        <div className={s.catWrapper}>
            <div className={s.avatarWrapper}>
                <img src={cat.photos.small !== null ? cat.photos.small : nullAvatar} alt="avatar"/>
                {cat.followed
                    ? <button onClick={onClickUnfollowButtonHandler} disabled={isFollowingInProgress}>UNFOLLOW</button>
                    : <button onClick={onClickFollowButtonHandler} disabled={isFollowingInProgress}>FOLLOW</button>}
            </div>
            <div className={s.catInfoWrapper}>
                <div className={s.firstColumn}>
                    <NavLink to={`/profile/${cat.id}`}>
                        <h3>{cat.name}</h3>
                    </NavLink>
                    <p className={s.status}>{cat.status}</p>
                </div>
                <div className={s.secondColumn}>
                    <p className={s.cityInfo}>{'el.address.city'}</p>
                    <p className={s.countryInfo}>{'el.address.country'}</p>
                </div>
            </div>
        </div>
    );
};
