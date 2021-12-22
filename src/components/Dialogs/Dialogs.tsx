import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import NewDialogMessage from "./Message/NewMessage/NewDialogMessage";
import {DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";


const Dialogs = () => {

    let dialog = useSelector<RootStateType, DialogsType[]>(state =>
        state.dialogsReducer.dialogsData)
    let message = useSelector<RootStateType, MessagesType[]>(state =>
        state.dialogsReducer.messagesData)

    let showDialogElements = dialog.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let showMessageElements = message.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    let newMessage = useSelector((state: RootStateType) => state.dialogsReducer.newMessageBody)


    return (
        <div>
            <div className={style.dialogs_global}>
                <div className={style.dialogs}>
                    {showDialogElements}
                </div>
                <div className={style.messages}>
                    {showMessageElements}
                </div>
            </div>
            <NewDialogMessage
                newMessage={newMessage}
            />
        </div>
    )
}

export default Dialogs;