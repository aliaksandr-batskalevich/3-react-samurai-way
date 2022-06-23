import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";

const App = () => {
    return (
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <Content/>
        </div>
    )
}

export default App;
