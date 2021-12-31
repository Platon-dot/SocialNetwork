import React from "react";
import style from './userPosts.module.css';
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";

export type UsePostsPropsType = {
    userName: string
    message: string
    likeCounts: number
    id: string
}

const UserPosts = (props: UsePostsPropsType) => {

    // let {profile} = useSelector<RootStateType, ProfileResponseType>(state => state.profileReducer)

    return (
        <div>
            <div className={style.userPostsBlock}>
                <div className={style.userPost}>
                    <ProfileInfo userName={props.userName}/>
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