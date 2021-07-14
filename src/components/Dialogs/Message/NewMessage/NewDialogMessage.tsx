import React from "react";
import style from './NewDialogMessage.module.css';


// type MessageType = {
//     message: string
// }

const NewDialogMessage = () => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={style.newMessage}>

            <div className={style.userTextArea}>
                    <textarea className={style.newDialogMessage}
                              ref={newMessageElement}
                              name="message"
                              cols={30}
                              rows={10}
                              placeholder="What's on your mind?">
                    </textarea>
            </div>
            <button className={style.buttonNewMessage}
                    onClick={addMessage}>
                New message
            </button>
        </div>
    )
}

export default NewDialogMessage