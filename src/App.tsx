import React from 'react';
import './App.css';
import logo from './img/logotype.png';
import newsfeed from './img/facebook.png'
import badges from './img/dribbble.png'
import exploreStories from './img/google_plus.png'
import popularGroups from './img/instagram.png'
import authorProfile from './img/linkedin.png'
import Header from "./components/Header/header";
import MenuBox from "./components/MenuBox/MenuBox";
import NewsBox from "./components/NewsZone/NewsBox";
import SettingsBox from "./components/Settings/SettingsBox";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Route component={Header}/>
            <div className="socialPage">
                <Route component={MenuBox}/>
                <Route component={NewsBox}/>
                <Route component={SettingsBox}/>
                <Route component={Footer}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
