import React, {useEffect} from "react";
import style from './ProfileZone.module.css';
import UserPosts from "./UserPosts/userPosts";
import NewUserMessage from "./NewMessage/NewUserMessage";
import {useDispatch, useSelector} from "react-redux";
import {addPostAC, onPostChangeAC, setProfilesTS} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";


const ProfileZone = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProfilesTS())
    }, [])

    const {userPosts, newPostText} = useSelector((state: RootStateType) => state.profileReducer)

    const addPost = () => {
        dispatch(addPostAC())
    }
    const updateNewPostText = (value: string) => {
        dispatch(onPostChangeAC(value))
    }
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
                    // src="/src/img/mainImage.jpg"
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