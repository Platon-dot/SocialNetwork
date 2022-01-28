import React, {useEffect} from 'react';
import ProfilePage from "./profilePage";
import {useAppSelector} from "../../redux/redux-store";
import {Redirect, useHistory} from "react-router-dom";

const Container = () => {
    // const isAuth = useAppSelector<boolean>(state => state.authReducer.isAuth)
    //
    // const history = useHistory()
    //
    // useEffect(() => {
    //     if (!isAuth) history.push("/login")
    // }, []);


    return (
        <>

            <ProfilePage/>

        </>
    );
};

export default Container;
