import React from 'react';
import './App.css';
import LeftMenuBar from "./components/LeftMenuBar/LeftMenuBar";
import ProfileZone from "./components/ProfileZone/ProfileZone";
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
import ProfilePageContainer from "./components/ProfileZone/ProfileInfo/ProfilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useAppSelector} from "./redux/redux-store";


const App = () => {

    // const isAuth = useAppSelector<boolean>(state => state.authReducer.isAuth)
    //
    // if (!isAuth) return <Redirect to="/profile"/>

    return (
        <div className="backgroundZone">
            <Route component={HeaderContainer}/>
            <div className="socialPage">
                <Route component={LeftMenuBar}/>
                <Route component={Friends}/>
                <div className="socialPageContent">
                    <Route path="/" exact component={ProfileZone} />
                    <Route path="/profile" component={ProfileZone}/>
                    <Route path="/profilePage/:userId" component={ProfilePageContainer}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" component={Login}/>
                    {/*<Redirect from="/" to="/profile"/>*/}
                </div>
                <Route component={SettingsBox}/>
                <Route component={Footer}/>
            </div>
        </div>

    );
}

export default App;
