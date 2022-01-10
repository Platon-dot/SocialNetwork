import React from "react";
import style from './ProfileZone.module.css';
import UserPosts from "./UserPosts/userPosts";
import NewUserMessage from "./NewMessage/NewUserMessage";
import {useDispatch} from "react-redux";
import {addPostAC, onPostChangeAC, ProfileResponseType} from "../../redux/profile-reducer";
import {useAppSelector} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


const ProfileZone = () => {

    const dispatch = useDispatch()

    const {userPosts, newPostText} = useAppSelector<ProfileResponseType>(state => state.profileReducer)
    const isAuth = useAppSelector<boolean>(state => state.authReducer.isAuth)

    const addPost = () => {
        dispatch(addPostAC())
    }
    const updateNewPostText = (value: string) => {
        dispatch(onPostChangeAC(value))
    }
    const showPost = userPosts.map(p => (
        <UserPosts
            key={p.id}
            id={p.id}
            userName={p.name}
            message={p.message}
            likeCounts={p.likes}
        />)
    )

    if (!isAuth) return <Redirect to="/login"/>
    return (
        <div>
            <div className={style.image_for_news}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2c/The_social_network.svg"
                    alt="logo"/>
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

export default ProfileZone
