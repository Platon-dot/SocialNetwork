import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import NewDialogMessage from "./Message/NewMessage/NewDialogMessage";
import {DialogsPageTypes} from "../../redux/dialogs-reducer";
import {useAppSelector} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


const Dialogs = () => {

    const {dialogsData, messagesData, newMessageBody} = useAppSelector<DialogsPageTypes>(state =>
        state.dialogsReducer)
    const isAuth = useAppSelector<boolean>(state => state.authReducer.isAuth)

    let showDialogElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let showMessageElements = messagesData.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    if (!isAuth) return <Redirect to="/login"/>
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
                newMessage={newMessageBody}
            />
        </div>
    )
}

export default Dialogs;