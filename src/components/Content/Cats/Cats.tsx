import React from "react";
import {CatsType} from "../../../redux/cats-reducer";
import axios from "axios";
import s from './Cats.module.css'
import nullAvatar from '../../../assets/images/nullAvatar.png'

type CatsPropsType = {
    cats: CatsType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setCats: (catsToSet: CatsType) => void
}

export class Cats extends React.Component<CatsPropsType, {}> {
    constructor(props: CatsPropsType) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setCats(response.data.items);
        });
    }

    render() {
        const onClickFollowButtonHandler = (id: number) => {
            this.props.follow(id);
        };
        const onClickUnfollowButtonHandler = (id: number) => {
            this.props.unfollow(id);
        };
        const showMoreHandler = () => {
            console.log('Show more, please!')
        };

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
                {catsToRender}
                <div className={s.showMoreButtonWrapper}>
                    <button onClick={showMoreHandler}>Show more</button>
                </div>
            </div>
        )
    }
}

// export const Cats = (props: CatsPropsType) => {
//
//     if (props.cats.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setCats(response.data.items);
//         });
//
//     }
//
//     const onClickFollowButtonHandler = (id: number) => {
//         props.follow(id);
//     };
//     const onClickUnfollowButtonHandler = (id: number) => {
//         props.unfollow(id);
//     };
//     const showMoreHandler = () => {
//         console.log('Show more, please!')
//     };
//
//     let catsToRender = props.cats.map(el => {
//         return (
//             <div className={s.catWrapper} key={el.id}>
//                 <div className={s.avatarWrapper}>
//                     <img src={el.photos.small !== null ? el.photos.small : nullAvatar} alt="avatar"/>
//                     {el.followed
//                         ? <button onClick={() => onClickUnfollowButtonHandler(el.id)}>UNFOLLOW</button>
//                         : <button onClick={() => onClickFollowButtonHandler(el.id)}>FOLLOW</button>}
//                 </div>
//                 <div className={s.catInfoWrapper}>
//                     <div className={s.firstColumn}>
//                         <h3>{el.name}</h3>
//                         <p>{el.status}</p>
//                     </div>
//                     <div className={s.secondColumn}>
//                         <p className={s.cityInfo}>{'el.address.city'}</p>
//                         <p className={s.countryInfo}>{'el.address.country'}</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     });
//
//     return (
//         <div className={s.catsPageWrapper}>
//             {catsToRender}
//             <div className={s.showMoreButtonWrapper}>
//                 <button onClick={showMoreHandler}>Show more</button>
//             </div>
//         </div>
//     )
// };