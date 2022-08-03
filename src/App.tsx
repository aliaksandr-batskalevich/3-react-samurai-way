import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {actionType, stateType} from "./redux/state";


type AppPropsType = {
    state: stateType
    dispatch: (action: actionType) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <NavBar sideBarData={props.state.friendsPage}/>
                <Content
                    state={props.state}
                    dispatch={props.dispatch}
                />
            </div>
        </BrowserRouter>
    )
}

export default App;
