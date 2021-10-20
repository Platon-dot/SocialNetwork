import React, {ChangeEvent} from "react";
import style from './NewDialogMessage.module.css';
import {ActionTypes} from "../../../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../../redux/dialogs-reducer";



type MessageType = {
    dispatch: (action: ActionTypes) => void
}

const NewDialogMessage = (props: MessageType) => {

    const addMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = (e.currentTarget.value)
        props.dispatch(updateNewMessageBodyAC(body))
    }

    const sendNewMessageHandler = () => {
        props.dispatch(sendMessageAC())
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