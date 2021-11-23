import React, {ChangeEvent} from "react";
import style from './NewDialogMessage.module.css';
import {sendMessageAC, updateNewMessageBodyAC} from "../../../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";

type NewDialogMessageType = {
    newMessage: string
}

const NewDialogMessage = (props: NewDialogMessageType) => {

    let dispatch = useDispatch()

    const addMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    const sendNewMessageHandler = () => {
        dispatch(sendMessageAC())
        dispatch(updateNewMessageBodyAC(""))
    }

    return (
        <div className={style.newMessage}>

            <div className={style.userTextArea}>
                    <textarea
                        className={style.newDialogMessage}
                        onChange={addMessageHandler}
                        name="message"
                        placeholder="What's on your mind?"
                        value={props.newMessage}
                    >
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