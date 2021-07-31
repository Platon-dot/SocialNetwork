import React from "react";
import style from './NewUserMessage.module.css';


type NewMessageType = {
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (userMessage: string) => void
}


const NewUserMessage = (props: NewMessageType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }

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
                    <textarea ref={newPostElement} name="message"
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