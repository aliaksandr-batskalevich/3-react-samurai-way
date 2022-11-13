import React from "react";
import s from './Content.module.css';
import {Friends} from "./Friends/Friends";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialoguesContainer from "./Dialogues/DialoguesContainer";
import CatsContainer from "./Cats/CatsContainer";
import {Login} from "./Login/Login";
import ProfileContainerFC from "./Profile/ProfileContainerFC";

export const Content = () => {

    return (
        <div className={s.contentWrapper}>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<ProfileContainerFC/>}/>
                <Route path='/profile/:userId' element={<ProfileContainerFC/>}/>
                <Route path='/friends' element={<Friends/>}/>
                <Route path='/messages/*' element={<DialoguesContainer/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/cats' element={<CatsContainer/>}/>
            </Routes>
        </div>
    )
}