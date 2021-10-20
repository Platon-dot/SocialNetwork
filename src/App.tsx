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
import {ActionTypes, RootStateType} from "./redux/state";
import Friends from "./components/Friends/Friends";

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (userMessage: string) => void
    dispatch: (action: ActionTypes) => void
}


const App = (props: AppPropsType) => {
    let posts = props.state.profilePage.userPosts
    let dialog = props.state.dialogsPage.dialogsData
    let message = props.state.dialogsPage.messagesData
    let newPostText = props.state.profilePage.newPostText
debugger

    return (

        <div className="backgroundZone">
            <Route component={Header}/>
            <div className="socialPage">
                <Route component={LeftMenuBar}/>
                <Route component={Friends}/>
                <div className="socialPageContent">
                    <Route path="/theWall" render={() =>
                        <NewsGeneralZone
                            userPosts={posts}
                            addPost={props.addPost}
                            dispatch={props.dispatch}
                            newPostText={newPostText}
                            updateNewPostText={props.updateNewPostText}
                        />}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            dialog={dialog}
                            message={message}
                            dispatch={props.dispatch}/>}
                    />
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
