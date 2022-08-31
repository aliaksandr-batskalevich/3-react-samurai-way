import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileInfoType} from "../../../../redux/profile-reducer";
import jobOpenings from './../../../../assets/images/jobOpenings.png'

type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    let {
        fullName,
        aboutMe,
        lookingForAJobDescription,
        lookingForAJob,
        contacts,
        ...restProps
    } = props.profileInfo;


    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.avatarWrapper}>
                <img className={s.avatarImg} src={restProps.photos.large} alt="avatar"/>
                {lookingForAJobDescription && <img
                    className={s.jobOpeningsImg}
                    src={jobOpenings}
                    alt="openingForJob"/>}
            </div>
            <div className={s.description}>
                <div className={s.title}>
                    <h2>{fullName}</h2>
                    <p>{aboutMe}</p>
                </div>
                <div className={s.skills}>
                    <h3>Skills:</h3>
                    <p>{lookingForAJob}</p>
                </div>
                <div className={s.contacts}>
                    <h3>Contacts:</h3>
                    <ul>
                        {contacts.facebook && <li><a href={contacts.facebook} target='_blank' rel="noreferrer">
                            {contacts.facebook.split('//')[1]}
                        </a></li>}
                        {contacts.vk && <li><a href={contacts.vk} target='_blank' rel="noreferrer">
                            {contacts.vk.split('//')[1]}
                        </a></li>}
                        {contacts.website && <li><a href={contacts.website} target='_blank' rel="noreferrer">
                            {contacts.website.split('//')[1]}
                        </a></li>}
                        {contacts.twitter && <li><a href={contacts.twitter} target='_blank' rel="noreferrer">
                            {contacts.twitter.split('//')[1]}
                        </a></li>}
                        {contacts.instagram && <li><a href={contacts.instagram} target='_blank' rel="noreferrer">
                            {contacts.instagram.split('//')[1]}
                        </a></li>}
                        {contacts.youtube && <li><a href={contacts.youtube} target='_blank' rel="noreferrer">
                            {contacts.youtube.split('//')[1]}
                        </a></li>}
                        {contacts.github && <li><a href={contacts.github} target='_blank' rel="noreferrer">
                            {contacts.github.split('//')[1]}
                        </a></li>}
                        {contacts.mainLink && <li><a href={contacts.mainLink} target='_blank' rel="noreferrer">
                            {contacts.mainLink.split('//')[1]}
                        </a></li>}
                    </ul>
                </div>

            </div>
        </div>
    )
}
