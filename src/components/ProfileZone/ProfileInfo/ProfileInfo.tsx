import React from "react";
import style from './ProfileInfo.module.css';

type ProfileProps = {
    userName: string
}

export const ProfileInfo = (props: ProfileProps) => {
    return (
        <>
            <div>
                <span className={style.userNamePost}>{props.userName}</span>
                {/*<img src="https://www.1zoom.ru/big2/58/195128-Sepik.jpg" alt="userAvatar"/>*/}

            </div>
        </>
    )
}
