import React from "react";
import {useAppSelector} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


const Music = () => {
    const isAuth = useAppSelector<boolean>(state => state.authReducer.isAuth)
    if (!isAuth) return <Redirect to="/login"/>
    return (
        <div>
            Music
        </div>
    )
}

export default Music;