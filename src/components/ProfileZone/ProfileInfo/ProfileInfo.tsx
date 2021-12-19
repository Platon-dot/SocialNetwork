import React from "react";
import style from './ProfileInfo.module.css';
import {useSelector} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {ProfileResponseType} from "../../../redux/profile-reducer";


const ProfileInfo = () => {

    let {profile} = useSelector<RootStateType, ProfileResponseType>(state => state.profileReducer)

    return (
        <>
            <div>
                <span className={style.userNamePost}>{profile.fullName}</span>
                <img src={profile.photos.small} alt="userAvatar"/>
            </div>
            <div>

            </div>
        </>
    )
}

export default ProfileInfo