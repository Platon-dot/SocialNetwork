import React, {ChangeEvent} from "react";
import style from './NewDialogMessage.module.css';
import {sendMessageAC, updateNewMessageBodyAC} from "../../../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";

type MessageType = {
}

const NewDialogMessage = (props: MessageType) => {

    let dispatch = useDispatch()

    const addMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = (e.currentTarget.value)
        dispatch(updateNewMessageBodyAC(body))
    }

    const sendNewMessageHandler = () => {
        dispatch(sendMessageAC())
    }

    return (
        <div className={style.newMessage}>

            <div className={style.userTextArea}>
                    <textarea
                        className={style.newDialogMessage}
                        onChange={addMessageHandler}
                        name="message"
                        placeholder="What's on your mind?">
                    </textarea>
            </div>
            <button className={style.buttonNewMessage}
                    onClick={sendNewMessageHandler}>
                New message
            </button>
        </div>
    )
}

export default NewDialogMessage