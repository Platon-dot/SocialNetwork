import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../redux/redux-store";
import {getUserStatusTC, ProfileResponseType, setProfilesTC, updateUserStatusTC} from "../../../redux/profile-reducer";
import {Redirect, useParams} from "react-router-dom";
import styles from "../../Users/Users.module.css";
import Image from 'react-bootstrap/Image'
import {user} from "../profilePage";
import {ProfileType} from "../../../api/profile-api";


const ProfilePageContainer = React.memo(() => {
    let dispatch = useDispatch()
    let profile = useAppSelector<ProfileType>(state => state.profileReducer.profile)
    const isAuth = useAppSelector<boolean>(state => state.authReducer.isAuth)
    const status = useAppSelector<string>(state => state.profileReducer.status)
    let {userId}: user = useParams()


    useEffect(() => {
        setTimeout(() => {
            dispatch(setProfilesTC(+userId))
            dispatch(getUserStatusTC(+userId))
        }, 1500)
    }, [])


    const [localStatus, setLocalStatus] = useState(status)
    const [editMode, setEditMode] = useState(true)

    const activateEditMode = () => {
        setEditMode(!editMode)
        dispatch(updateUserStatusTC(localStatus))
    }

    const changeStatusProfileText = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length <= 300) {
            setLocalStatus(e.currentTarget.value)
        }
    }

    if (!isAuth) return <Redirect to="/login"/>
    return (
        <div style={{height: "250px", width: "300px"}}>
            <div style={{height: "50px"}}>
                {profile.fullName}
            </div>
            {editMode ?
                <div>
                    Status: <span onDoubleClick={activateEditMode}>
                    {status === "" ? 'Please put you current status' : status}
                </span>
                </div>
                :
                <input
                    type="text"
                    value={localStatus}
                    onChange={changeStatusProfileText}
                    onBlur={activateEditMode}
                    autoFocus
                />}
            <Image
                src={profile.photos.large}
                alt="avatar"
                className={styles.userPhoto}/>
            <div>
                <div>
                    <span>user Id: </span>
                    <span>{profile.userId}</span>
                </div>
                <span>Looking for a job:</span>
                {profile.lookingForAJob ?
                    <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                     className={`bi bi-check-circle col-1 ${styles.imageColorTrue}`} viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path
                    d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
            </span>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         className={`bi bi-x-circle col-1 ${styles.imageColorFalse}`} viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>}
            </div>
            <div>Looking for a job description:{profile.lookingForAJobDescription}</div>
            <div><span>About me:  </span><span>{profile.aboutMe}</span></div>
        </div>
    );
});

export default ProfilePageContainer;
