import React, {useEffect} from 'react';
import Header from "./Header";
import {useDispatch} from "react-redux";
import {authResponseType, setAuthUserTC} from "../../redux/auth-reducer";
import {useAppSelector} from "../../redux/redux-store";

const HeaderContainer = () => {
    useEffect(() => {
        dispatch(setAuthUserTC())
    }, [])

    const dispatch = useDispatch()
    const {isAuth} = useAppSelector<authResponseType>(state => state.authReducer)
    const login = useAppSelector<string>(state => state.authReducer.data.login)

    return <Header isAuth={isAuth} login={login}/>
};

export default HeaderContainer;
