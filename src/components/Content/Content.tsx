import React from "react";
import s from './Content.module.css';
import {Profile} from "./Profile/Profile";
import {Dialogues} from "./Dialogues/Dialogues";
import {Friends} from "./Friends/Friends";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {appDataType} from "../../redux/state";

type ContentPropsType = {
    appData: appDataType
    addPostCallBack: (postMessage: string) => void
}

export const Content = (props: ContentPropsType) => {
    return (
        <div className={s.contentWrapper}>
                <Routes>
                    <Route path='/' element={<Profile profileInfo={props.appData.profilePage.profileInfo} posts={props.appData.profilePage.posts} addPostCallBack={props.addPostCallBack}/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/messages/*' element={<Dialogues dialogues={props.appData.dialoguesPage}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>
    )
}