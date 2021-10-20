import React, {ChangeEvent} from "react";
import style from './NewUserMessage.module.css';
import {ActionTypes} from "../../../redux/state";
import {addPostAC, onPostChangeAC} from "../../../redux/profile-reducer";


type NewMessageType = {
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (userMessage: string) => void
    dispatch: (action: ActionTypes) => void
}

const NewUserMessage = (props: NewMessageType) => {

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        props.dispatch(onPostChangeAC(''))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        console.log(text)
        props.dispatch(onPostChangeAC(text))
    }
    return (
        <div className={style.newPost}>
            <div className={style.lineNewPost}>
                <a href="#" className={style.lineNewPost}>
                    <i className={style.logoNewPost}/>
                    <button onClick={addPost}>Create Post</button>
                </a>
            </div>
            <div className={style.userTextArea}>
                    <textarea name="message"
                              className={style.userMessage}
                              cols={30} rows={10}
                              placeholder="What's on your mind?"
                              onChange={onPostChange}
                              value={props.newPostText}/>
            </div>
        </div>
    )
}


export default NewUserMessage