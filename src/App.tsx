import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {StoreType} from "./redux/redux-store";


type AppPropsType = {
    store: StoreType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <NavBar store={props.store}/>
                <Content store={props.store}/>
            </div>
        </BrowserRouter>
    )
}

export default App;
