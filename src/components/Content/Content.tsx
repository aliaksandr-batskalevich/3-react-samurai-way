import React from "react";
import s from './Content.module.css';
import {Friends} from "./Friends/Friends";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {DialoguesContainer} from "./Dialogues/DialoguesContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import CatsContainer from "./Cats/CatsContainer";
import {Login} from "./Login/Login";

export const Content = () => {
    return (
        <div className={s.contentWrapper}>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                {/*code for start page*/}
                <Route path='/profile' element={<ProfileContainer/>}/>

                <Route path='/profile/:userId' element={<ProfileContainer/>}/>
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