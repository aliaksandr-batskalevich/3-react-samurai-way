import React from "react";
import s from './Content.module.css';
import {Profile} from "./Profile/Profile";
import {Friends} from "./Friends/Friends";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {StoreType} from "../../redux/redux-store";
import {DialoguesContainer} from "./Dialogues/DialoguesContainer";

type ContentPropsType = {
    store: StoreType
}

export const Content = (props: ContentPropsType) => {
    return (
        <div className={s.contentWrapper}>
            <Routes>
                <Route path='/' element={
                    <Profile
                        store={props.store}
                    />}
                />
                <Route path='/friends' element={<Friends/>}/>
                <Route path='/messages/*' element={
                    <DialoguesContainer
                        store={props.store}
                    />}
                />
                <Route path='/news' element={<News/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </div>
    )
}