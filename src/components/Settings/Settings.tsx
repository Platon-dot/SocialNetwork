import React from "react";
import {useAppSelector} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

const Settings = () => {
    const isAuth = useAppSelector<boolean>(state => state.authReducer.isAuth)
    if (!isAuth) return <Redirect to="/login"/>
    return (
        <>
            Settings
        </>
    )
}

export default Settings;