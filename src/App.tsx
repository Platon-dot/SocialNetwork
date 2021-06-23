import React from 'react';
import './App.css';
import logo from './img/logotype.png';
import newsfeed from './img/facebook.png'
import badges from './img/dribbble.png'
import exploreStories from './img/google_plus.png'
import popularGroups from './img/instagram.png'
import authorProfile from './img/linkedin.png'
import Header from "./components/header";
import MenuBox from "./components/MenuBox";
import NewsBox from "./components/NewsBox";
import SettingsBox from "./components/SettingsBox";
import Footer from "./components/Footer";



const App = () => {
    return (
        <div className="faceofsocialpage">
            <Header/>
            <MenuBox/>
            <NewsBox/>
            <SettingsBox/>
            <Footer/>
        </div>
    );
}

export default App;
