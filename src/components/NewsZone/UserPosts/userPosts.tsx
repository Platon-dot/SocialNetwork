import React from "react";
import style from './userPosts.module.css';

const UserPosts = () => {
    return (
        <div>
            <div className={style.userPostsBlock}>
                <div className={style.userPost}>
                    <img src="https://www.1zoom.ru/big2/58/195128-Sepik.jpg" alt="uresAvatar"/>
                    post 1
                    <div>
                        <span>Like</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserPosts