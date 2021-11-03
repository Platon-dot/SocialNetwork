import React from "react";
import style from './NewsGeneralZone.module.css';
import UserPosts from "./UserPosts/userPosts";
import NewUserMessage from "./NewMessage/NewUserMessage";
import {useDispatch, useSelector} from "react-redux";
import {addPostAC, onPostChangeAC} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";


type NewsGeneralZoneType = {

}

const NewsGeneralZone = (props: NewsGeneralZoneType) => {

    const dispatch = useDispatch()

    const newPostText = useSelector((state: RootStateType) => state.profileReducer.newPostText)
    const userPosts = useSelector((state: RootStateType) => state.profileReducer.userPosts)

    const addPost = () => {
        dispatch(addPostAC())
    }

    const updateNewPostText = (value: string) => {
        dispatch(onPostChangeAC(value))
    }

    // let showPost = props.userPosts.map(p => (
    let showPost = userPosts.map(p => (
        <UserPosts
            key={p.id}
            id={p.id}
            userName={p.name}
            message={p.message}
            likeCounts={p.likes}
        />)
    )

    return (
        <div>
            <div className={style.image_for_news}>
                <img
                    src="https://img.freepik.com/free-vector/hands-holding-earphones-communicate-in-instant-messengers-by-voice-messages-audio-chat-application-social-media-online-communication-concept-horizontal-vector-illustration_48369-36729.jpg?size=626&ext=jpg&ga=GA1.2.1719178491.1616889600"
                    alt=""/>
            </div>

            <NewUserMessage
                newPostText={newPostText}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
            <div className={style.userPost}>
                {showPost}
            </div>
        </div>
    )
}

export default NewsGeneralZone