import React from "react";
import style from './userPosts.module.css';

type UserPostsPropsType = {
    userName: string
    message: string
    likeCounts: number
}

const UserPosts: React.FC<UserPostsPropsType> = (props) => {
    return (
        <div>
            <div className={style.userPostsBlock}>
                <div className={style.userPost}>
                    <span className={style.userNamePost}>{props.userName}</span>
                    <img src="https://www.1zoom.ru/big2/58/195128-Sepik.jpg" alt="userAvatar"/>
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