import React, {useState} from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogues} from './components/Dialogues/Dialogues'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header/>
                <Navbar navBarPage={props.state.navBarPage}/>
                <div className={'appWrapperContent'}>
                    <Routes>
                        <Route path={'/'} element={<Profile             // rendering startPage
                            profileData={props.state.profilePage}
                        />}/>
                        <Route path={'/profile'} element={<Profile
                            profileData={props.state.profilePage}
                        />}/>
                        <Route path='/dialogues/*' element={<Dialogues
                            dialoguesData={props.state.dialoguesPage}
                        />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
