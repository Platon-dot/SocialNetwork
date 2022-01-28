import React from "react";
import style from './profilePage.module.css';
import ProfilePosts from "./UserPosts/profilePosts";
import NewProfileMessage from "./NewMessage/newProfileMessage";
import {useDispatch} from "react-redux";
import {addPostAC, onPostChangeAC, ProfileResponseType} from "../../redux/profile-reducer";
import {useAppSelector} from "../../redux/redux-store";
import {useParams} from "react-router-dom";
import ProfilePageContainer from "./ProfileInfo/profilePageContainer";

export type user = {
    userId: string
}

const ProfilePage = () => {

    const dispatch = useDispatch()

    const {userPosts, newPostText} = useAppSelector<ProfileResponseType>(state => state.profileReducer)

    const addPost = () => {
        dispatch(addPostAC())
    }
    const updateNewPostText = (value: string) => {
        dispatch(onPostChangeAC(value))
    }
    const showPost = userPosts.map(p => (
        <ProfilePosts
            key={p.id}
            id={p.id}
            userName={p.name}
            message={p.message}
            likeCounts={p.likes}
        />)
    )

    let {userId}: user = useParams()


    return (
        <div>
            <ProfilePageContainer/>
            <div className={style.image_for_news}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2c/The_social_network.svg"
                    alt="logo"/>
            </div>

            <NewProfileMessage
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

export default ProfilePage
