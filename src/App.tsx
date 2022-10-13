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
                <Header/>
                <NavBar />
                <Content />
            </div>
        </HashRouter>
    )
}

export default App;
