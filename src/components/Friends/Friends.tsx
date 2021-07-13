import React from "react";
import style from './Friends.module.css'
import {v1} from "uuid";

type bestFriendsTypes = {
    id: string
    name: string
}

const Friends = (props: bestFriendsTypes) => {

    let bestFriends = [
        {id: v1(), name: "Stefania"},
        {id: v1(), name: "Lina"},
        {id: v1(), name: "Kris"}
    ]

    return (
        <div className={style.friendsMain}>
            <h5 className={style.titleFriends}>Friends</h5>
            <div className={style.bestFriendMain}>
                <div className={style.bestFriend}>
                    <img className={style.imgOfBestFriend} src="http://uitheme.net/sociala/images/user-9.png" alt=""/>
                    <span className={style.friendNames}>{bestFriends[0].name}</span>
                </div>
                <div className={style.bestFriend}>
                    <img className={style.imgOfBestFriend} src="http://uitheme.net/sociala/images/user-9.png" alt=""/>
                    <span className={style.friendNames}>{bestFriends[1].name}</span>
                </div>
                <div className={style.bestFriend}>
                    <img className={style.imgOfBestFriend} src="http://uitheme.net/sociala/images/user-9.png" alt=""/>
                    <span className={style.friendNames}>{bestFriends[2].name}</span>
                </div>
            </div>
        </div>
    )
}

export default Friends