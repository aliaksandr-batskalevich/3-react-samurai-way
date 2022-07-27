import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {appData, appDataType, subscribe} from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";


const renderApp = (appData: appDataType) => {
    ReactDOM.render(<App appData={appData} />, document.getElementById('root'));
}

subscribe(renderApp);

renderApp(appData);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
