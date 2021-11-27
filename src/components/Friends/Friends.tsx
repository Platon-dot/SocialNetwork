import React from "react";
import style from './Friends.module.css'
import {v1} from "uuid";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

type bestFriendsTypes = {
    id: string
    name: string
    imgOfBestFriend: string
}

const Friends = React.memo(() => {
    // const bestFriends = useSelector((state: RootStateType) => state.usersReducer.bestFriends)

    return (
        <div className={style.friendsMain}>
            {/*<h5 className={style.titleFriends}>Friends</h5>*/}
            {/*<div className={style.bestFriendMain}>*/}
            {/*    {bestFriends.map(friends => {*/}
            {/*        return (*/}
            {/*            <div className={style.bestFriend} key={friends.id}>*/}
            {/*                <img className={style.imgOfBestFriend} src={friends.avatarUrl}*/}
            {/*                     alt="as"/>*/}
            {/*                <span className={style.friendNames}>{friends.fullName}</span>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*    <div/>*/}
            {/*</div>*/}
        </div>

    )
})

export default Friends