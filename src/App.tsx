import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {BrowserRouter, HashRouter} from "react-router-dom";

const App = () => {
    return (
        <HashRouter>
            <div className="appWrapper">
                <div className={'container'}>
                    <Header/>
                    <NavBar/>
                    <Content/>
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
