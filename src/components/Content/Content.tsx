import React from "react";
import s from './Content.module.css';
import {Profile} from "./Profile/Profile";
import {Dialogues} from "./Dialogues/Dialogues";
import {Friends} from "./Friends/Friends";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const Content = () => {
    return (
        <div className={s.contentWrapper}>
                <Routes>
                    <Route path='/' element={<Profile/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/messages/*' element={<Dialogues/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>
    )
}