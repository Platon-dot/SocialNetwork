import React, {ChangeEvent} from "react";
import style from './NewUserMessage.module.css';


// type MessageType = {
//     message: string
// }

const NewUserMessage = () => {

    // let newPostElement = React.createRef<HTMLTextAreaElement>

    // type textMessageHandlerType = ReturnType<typeof textMessageHandler>

    const textMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textValue = e.currentTarget.value
        return textValue
    }

    const addDialogMessage = (textValue: any) => {
        // alert(newPostElement.current?.value)
        alert(textValue)

    }


    return (
        <div className={style.newPost}>
            <div className={style.lineNewPost}>
                <a href="#" className={style.lineNewPost}>
                    <i className={style.logoNewPost}>
                    </i>
                    <button onClick={addDialogMessage}>Create Post</button>
                </a>
            </div>
            <div className={style.userTextArea}>
                    <textarea
                        // ref={newPostElement}
                        onChange={textMessageHandler}
                        name="message"
                        className={style.userMessage}
                        cols={30}
                        rows={10}
                        placeholder="What's on your mind? ZEPPO ">
                    </textarea>
            </div>
        </div>
    )
}

export default NewUserMessage