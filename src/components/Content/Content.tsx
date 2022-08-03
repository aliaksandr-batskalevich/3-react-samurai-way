import React from "react";
import s from './Content.module.css';
import {Profile} from "./Profile/Profile";
import {Dialogues} from "./Dialogues/Dialogues";
import {Friends} from "./Friends/Friends";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {actionType, stateType} from "../../redux/state";

type ContentPropsType = {
    state: stateType
    dispatch: (action: actionType) => void
}

export const Content = (props: ContentPropsType) => {
    return (
        <div className={s.contentWrapper}>
            <Routes>
                <Route path='/' element={
                    <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}
                />
                <Route path='/friends' element={<Friends/>}/>
                <Route path='/messages/*' element={
                    <Dialogues
                        dialogues={props.state.dialoguesPage}
                        dispatch={props.dispatch}
                    />}
                />
                <Route path='/news' element={<News/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </div>
    )
}