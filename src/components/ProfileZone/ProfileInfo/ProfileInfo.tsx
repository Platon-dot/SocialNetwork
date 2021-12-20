import React from "react";
import style from './ProfileInfo.module.css';
import {useSelector} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {ProfileResponseType} from "../../../redux/profile-reducer";
import {ProfileType} from "../../../api/profile-api";

type ProfileProps = {
    userName: string
}

export const ProfileInfo = (props: ProfileProps) => {


    return (
        <>
            <div>
                <span className={style.userNamePost}>{props.userName}</span>
                <img src="https://www.1zoom.ru/big2/58/195128-Sepik.jpg" alt="userAvatar"/>
            </div>
        </>
    )
}
