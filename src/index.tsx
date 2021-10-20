import './index.css';
import App from "./App";
import React from 'react';
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state";


export let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state.getState()}
                     addPost={state.addPost.bind(state)}
                     updateNewPostText={state.updateNewPostText.bind(state)}
                     dispatch={state.dispatch.bind(state)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree()
state.subscribe(rerenderTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
