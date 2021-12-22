import React, {useEffect} from 'react';
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {authResponseType, setAuthUserTC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";

const HeaderContainer = () => {
    useEffect(() => {
        dispatch(setAuthUserTC())
    }, [])

    const dispatch = useDispatch()
    const {isAuth} = useSelector<RootStateType, authResponseType>(state => state.authReducer)

    const login = useSelector<RootStateType>(state => state.authReducer.data.login)

    return <Header isAuth={isAuth} login={login}/>
};

export default HeaderContainer;