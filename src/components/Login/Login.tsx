import React from 'react';
import {Redirect} from "react-router-dom";
import {useAppSelector} from "../../redux/redux-store";

const Login = () => {
    const isAuth = useAppSelector<boolean>(state => state.authReducer.isAuth)
    let userId = useAppSelector<number>(state => state.authReducer.data.id)

    if (isAuth) return <Redirect to={`/profile/${userId}`}/>

    return (
        <div>
            <h4>You are not logged in, please register ))</h4>
        </div>
    );
};

export default Login;
