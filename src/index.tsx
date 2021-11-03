import './index.css';
import App from "./App";
import React from 'react';
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {RootStateType, store} from "./redux/redux-store";
import {Provider} from "react-redux";


export let rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App
                    state={state}
                />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state)
})
reportWebVitals();
