import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {HashRouter} from "react-router-dom";
import {Provider, useSelector} from "react-redux";
import {Preloader} from "./components/commons/Preloader/Preloader";
import {useAppDispatch} from "./redux/hooks";
import {authUserTC} from "./redux/auth-reducer";
import {getIsAppInit} from "./redux/selectors";
import {store} from "./redux/redux-store";

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

const AppWithProvider = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default AppWithProvider;
