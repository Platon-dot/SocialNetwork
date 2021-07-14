import React from "react";
import style from './NewUserMessage.module.css';


// type MessageType = {
//     message: string
// }

const NewUserMessage = () => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        alert(newPostElement.current?.value)
    }

    return (
        <div className={style.newPost}>
            <div className={style.lineNewPost}>
                <a href="#" className={style.lineNewPost}>
                    <i className={style.logoNewPost}>
                    </i>
                    <button onClick={addPost}>Create Post</button>
                </a>
            </div>
            <div className={style.userTextArea}>
                    <textarea ref={newPostElement} name="message" className={style.userMessage} cols={30} rows={10}
                              placeholder="What's on your mind?">
                    </textarea>
            </div>
        </div>
    )
}

export default NewUserMessage