import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import MenuBox from "./components/MenuBox/MenuBox";
import NewsGeneralZone from "./components/NewsZone/NewsGeneralZone";
import SettingsBox from "./components/Settings/SettingsBox";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="backgroundZone">
            <Route component={Header}/>
            <div className="socialPage">
                <Route component={MenuBox}/>
                <div className="socialPageContent">
                    <Route path="/newsbox" component={NewsGeneralZone}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
                <Route component={SettingsBox}/>
                <Route component={Footer}/>
            </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
