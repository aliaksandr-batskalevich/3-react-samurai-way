import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, appDataType} from './redux/state'

export const renderApp = (appData: appDataType) => {
    ReactDOM.render(<App appData={appData} addPostCallBack={addPost}/>, document.getElementById('root'));
}


