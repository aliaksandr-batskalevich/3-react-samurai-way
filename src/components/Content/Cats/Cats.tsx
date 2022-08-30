import React from "react";
import {CatsType} from "../../../redux/cats-reducer";
import axios from "axios";
import s from './Cats.module.css'
import nullAvatar from '../../../assets/images/nullAvatar.png'

type CatsPropsType = {
    cats: CatsType
    currentPage: number
    catsOnPage: number
    totalPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    setCats: (catsToSet: CatsType) => void
    setTotalPage: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void
}

export class Cats extends React.Component<CatsPropsType, {}> {
    constructor(props: CatsPropsType) {
        super(props);
    }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.catsOnPage}`)
            .then(response => {
                this.props.setCats(response.data.items);
                this.props.setTotalPage(Math.ceil(response.data.totalCount / this.props.catsOnPage));
            });

    }

    render() {
        const onClickFollowButtonHandler = (id: number) => {
            this.props.follow(id);
        };
        const onClickUnfollowButtonHandler = (id: number) => {
            this.props.unfollow(id);
        };
        const onClickPageHandler = (currentPage: number) => {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.catsOnPage}`)
                .then(response => {
                    this.props.setCats(response.data.items)
                });
            this.props.setCurrentPage(currentPage);
        };

        let pages = [];
        for (let i = 1; i <= this.props.totalPage; i++) {
            pages.push(i);
        }
        let indexOfCurrentPage = pages.indexOf(this.props.currentPage);
        let pagesOk = pages.slice(this.props.currentPage >= 7 ? indexOfCurrentPage - 7 : 0, indexOfCurrentPage + 7);

        let pagesToRender = pagesOk.map((page, index) => {
            return (
                <span
                    key={index}
                    className={this.props.currentPage === page ? s.activePage : ''}
                    onClick={() => onClickPageHandler(page)}
                >
                    {page}
                </span>
            )
        });

        let catsToRender = this.props.cats.map(el => {
            return (
                <div className={s.catWrapper} key={el.id}>
                    <div className={s.avatarWrapper}>
                        <img src={el.photos.small !== null ? el.photos.small : nullAvatar} alt="avatar"/>
                        {el.followed
                            ? <button onClick={() => onClickUnfollowButtonHandler(el.id)}>UNFOLLOW</button>
                            : <button onClick={() => onClickFollowButtonHandler(el.id)}>FOLLOW</button>}
                    </div>
                    <div className={s.catInfoWrapper}>
                        <div className={s.firstColumn}>
                            <h3>{el.name}</h3>
                            <p>{el.status}</p>
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
                {catsToRender}
            </div>
        )
    }
}