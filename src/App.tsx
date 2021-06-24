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



const App = () => {
    return (<div>
            <Header/>
        <div className="socialPage">
            <MenuBox/>
            <NewsBox/>
            <SettingsBox/>
            <Footer/>
        </div>
        </div>
    );
}

export default App;
