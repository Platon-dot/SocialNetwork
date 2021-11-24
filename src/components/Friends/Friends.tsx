import React from "react";
import style from './Friends.module.css'
import {v1} from "uuid";

type bestFriendsTypes = {
    id: string
    name: string
    imgOfBestFriend: string
}

const Friends = React.memo(() => {
    let bestFriends: bestFriendsTypes[] = [
        {id: v1(), name: "Stefania", imgOfBestFriend: "http://uitheme.net/sociala/images/user-9.png"},
        {id: v1(), name: "Victor", imgOfBestFriend: "http://uitheme.net/sociala/images/user-2.png"},
        {id: v1(), name: "John", imgOfBestFriend: "http://uitheme.net/sociala/images/user-3.png"}
    ]

    return (
        <div className={style.friendsMain}>
            <h5 className={style.titleFriends}>Friends</h5>
            <div className={style.bestFriendMain}>
                {bestFriends.map(friends => {
                    return (
                        <div className={style.bestFriend} key={friends.id}>
                            <img className={style.imgOfBestFriend} src={friends.imgOfBestFriend}
                                 alt="as"/>
                            <span className={style.friendNames}>{friends.name}</span>
                        </div>
                    )
                })}
                <div/>
            </div>
        </div>

    )
})

export default Friends