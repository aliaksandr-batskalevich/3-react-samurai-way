import React from "react";
import s from "./Cats.module.css";
import {CatsType} from "../../../redux/cats-reducer";
import {Preloader} from "../../commons/Preloader/Preloader";
import {Cat} from "./Cat/Cat";
import SuperPaginator from "./Paginator/SuperPaginator";

type CatsPropsType = {
    cats: CatsType
    toggleIsFetching: boolean
    followingInProgress: Array<number>

    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Cats: React.FC<CatsPropsType> = ({
                                                  cats,
                                                  toggleIsFetching,
                                                  follow,
                                                  unfollow,
                                                  followingInProgress,
                                              }) => {

    let catsToRender = cats.map(cat => {
        let isFollowingInProgress = followingInProgress.some(id => id === cat.id);

        return (
            <Cat key={cat.id} cat={cat} follow={follow} unFollow={unfollow} isFollowingInProgress={isFollowingInProgress} />
        );
    });

    return (
        <div className={s.catsPageWrapper}>
            <SuperPaginator viewPagesOddNumber={9} pageJumpPositive={100} />
            {toggleIsFetching ? <Preloader/> : catsToRender}
        </div>
    )
};