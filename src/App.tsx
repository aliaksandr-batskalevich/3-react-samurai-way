import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {HashRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {Preloader} from "./components/commons/Preloader/Preloader";
import {useAppDispatch} from "./redux/hooks";
import {authUserTC} from "./redux/auth-reducer";
import {getIsAppInit} from "./redux/selectors";

const App = () => {
    const isInit = useSelector(getIsAppInit);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authUserTC());
    }, [])


    return (
        <>
            {isInit
                ? <HashRouter>
                    <div className="appWrapper">
                        <div className={'container'}>
                            <Header/>
                            <NavBar/>
                            <Content/>
                        </div>
                    </div>
                </HashRouter>
                : <Preloader/>}
        </>
    )
}

export default App;
