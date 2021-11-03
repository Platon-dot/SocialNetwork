import React, {ChangeEvent} from "react";
import style from './NewUserMessage.module.css';


type NewMessageType = {
    newPostText: string
    addPost: () => void
    updateNewPostText: (userMessage: string) => void
}

const NewUserMessage = (props: NewMessageType) => {

    const addPostHandler = () => {
        props.addPost()
        props.updateNewPostText('')
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        console.log(text)
        props.updateNewPostText(text)
    }

    return (
        <div className={style.newPost}>
            <div className={style.lineNewPost}>
                <a href="#" className={style.lineNewPost}>
                    <i className={style.logoNewPost}/>
                    <button onClick={addPostHandler}>Create Post</button>
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