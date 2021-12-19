import React from "react";
import style from './userPosts.module.css';
import ProfileInfo from "../ProfileInfo/ProfileInfo";

export type UserPostsPropsType = {
    message: string
    likeCounts: number
    id: string
}

const UserPosts: React.FC<UserPostsPropsType> = (props) => {
    return (
        <div>
            <div className={style.userPostsBlock}>
                <div className={style.userPost}>
                    <ProfileInfo/>
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