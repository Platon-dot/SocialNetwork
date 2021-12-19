import React from "react";
import style from './ProfileInfo.module.css';
import {useSelector} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {ProfileResponseType} from "../../../redux/profile-reducer";
import {ProfileType} from "../../../api/profile-api";

type ProfileInfoType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    const {profile} = props
    return (
        <>
            <div>
                <span className={style.userNamePost}>{profile.fullName}</span>
                <img src={profile.photos.small} alt="userAvatar"/>
            </div>
        </>
    )
}
