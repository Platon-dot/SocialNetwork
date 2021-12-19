import React from "react";
import style from './userPosts.module.css';
import {useSelector} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {ProfileResponseType} from "../../../redux/profile-reducer";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";

export type UsePostsPropsType = {
    message: string
    likeCounts: number
    id: string
}

const UserPosts = (props: UsePostsPropsType) => {

    let {profile} = useSelector<RootStateType, ProfileResponseType>(state => state.profileReducer)

    return (
        <div>
            <div className={style.userPostsBlock}>
                <div className={style.userPost}>
                    <ProfileInfo profile={profile}/>
                    {props.message}
                    <div>
                        <span>{props.likeCounts} Like</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPosts