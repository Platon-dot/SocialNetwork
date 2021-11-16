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
import Friends from "./components/Friends/Friends";
import {RootStateType} from "./redux/redux-store";
import {useDispatch} from "react-redux";


type AppPropsType = {
    state: RootStateType
    // addPost: (postMessage: string) => void
    // updateNewPostText: (userMessage: string) => void
    // dispatch: (action: ActionTypes) => void
}


const App = (props: AppPropsType) => {

    let dialog = props.state.dialogsReducer.dialogsData

    // console.log(props.state.dialogsReducer.messagesData)

    return (
        <div className="backgroundZone">
            <Route component={Header}/>
            <div className="socialPage">
                <Route component={LeftMenuBar}/>
                <Route component={Friends}/>
                <div className="socialPageContent">
                    <Route path="/theWall" component={NewsGeneralZone}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            dialog={dialog}
                            message={props.state.dialogsReducer.messagesData}
                        />}
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
