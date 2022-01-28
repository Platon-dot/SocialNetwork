import React from 'react';
import './App.css';
import LeftMenuBar from "./components/LeftMenuBar/LeftMenuBar";
import SettingsBox from "./components/Settings/SettingsBox";
import Footer from "./components/Footer/Footer";
import {Redirect, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import Users from "./components/Users/Users";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePageContainer from "./components/ProfileZone/ProfileInfo/profilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfilePage from "./components/ProfileZone/profilePage";


const App = () => {


    return (
        <div className="backgroundZone">
            <Route component={HeaderContainer}/>
            <div className="socialPage">
                <Route component={LeftMenuBar}/>
                <Route component={Friends}/>
                <div className="socialPageContent">
                    {/*<Route path="/" exact component={ProfilePage} />*/}
                    <Route path="/profile/:userId" component={ProfilePage}/>
                    <Route path="/profilePage/:userId" component={ProfilePageContainer}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Redirect from="/" to="/profile/:userId"/>
                    <Route path="/login" component={Login}/>
                </div>
                <Route component={SettingsBox}/>
                <Route component={Footer}/>
            </div>
        </div>

    );
}

export default App;
