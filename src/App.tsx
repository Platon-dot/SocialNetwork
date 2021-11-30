import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import LeftMenuBar from "./components/LeftMenuBar/LeftMenuBar";
import ProfileZone from "./components/ProfileZone/ProfileZone";
import SettingsBox from "./components/Settings/SettingsBox";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {RootStateType} from "./redux/redux-store";
import { useSelector} from "react-redux";
import {DialogsType, MessagesType} from "./redux/dialogs-reducer";
import Users from "./components/Users/Users";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    let dialog = useSelector<RootStateType, DialogsType[]>(state =>
        state.dialogsReducer.dialogsData)
    let message = useSelector<RootStateType, MessagesType[]>(state =>
        state.dialogsReducer.messagesData)

    return (
        <div className="backgroundZone">
            <Route component={Header}/>
            <div className="socialPage">
                <Route component={LeftMenuBar}/>
                <Route component={Friends}/>
                <div className="socialPageContent">
                    <Route path="/profile" component={ProfileZone}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            dialog={dialog}
                            message={message}
                        />}
                    />
                    <Route path="/users" component={Users}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
                <Route component={SettingsBox}/>
                <Route component={Footer}/>
            </div>
        </div>

    );
}

export default App;
