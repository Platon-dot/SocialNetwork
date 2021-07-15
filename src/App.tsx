import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import LeftMenuBar from "./components/LeftMenuBar/LeftMenuBar";
import NewsGeneralZone from "./components/MainZone/NewsGeneralZone";
import SettingsBox from "./components/Settings/SettingsBox";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import state, {RootStateType} from "./redux/state";
import Friends from "./components/Friends/Friends";

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}


const App = (props: AppPropsType) => {
    let posts = state.profilePage.userPosts
    let dialog = state.dialogsPage.dialogsData
    let message = state.dialogsPage.messagesData

    return (

        <div className="backgroundZone">
            <Route component={Header}/>
            <div className="socialPage">
                <Route component={LeftMenuBar}/>
                <Route component={Friends}/>
                <div className="socialPageContent">
                    <Route path="/newsbox" render={() =>
                        <NewsGeneralZone
                            userPosts={posts}
                            addPost={props.addPost}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialog={dialog} message={message}/>}/>
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
