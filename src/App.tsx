import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import MenuBox from "./components/MenuBox/MenuBox";
import NewsGeneralZone from "./components/MainZone/NewsGeneralZone";
import SettingsBox from "./components/Settings/SettingsBox";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import state, {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
}

const App = (props: AppPropsType) => {
    let posts = state.profilePage.userPosts
    let dialog = state.dialogsPage.dialogsData
    let message = state.dialogsPage.messagesData

    return (
        <BrowserRouter>
            <div className="backgroundZone">
                <Route component={Header}/>
                <div className="socialPage">
                    <Route component={MenuBox}/>
                    <div className="socialPageContent">
                        <Route path="/newsbox" render={() => <NewsGeneralZone userPosts={posts}/>}/>
                        {/*<Route path="/newsbox" render={ (props: postDataPropsTypes) => <NewsGeneralZone/>}/>*/}
                        <Route path="/dialogs" render={() => <Dialogs dialog={dialog} message={message}/>}/>
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
