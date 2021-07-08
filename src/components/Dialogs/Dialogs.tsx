import React from "react";
import style from './Dialogs.module.css';
import {v1} from "uuid";
import DialogItem from "./DialogItem/Dialogs";
import Message from "./Message/Message";

export type DialogProps = {
    name: string,
    id: string
}

export type MessagesProps = {
    message: string,
    id: string
}

const Dialogs = (props: DialogProps) => {

    let dialogsData = [
        {id: v1(), name: "Platon"},
        {id: v1(), name: "Alina"},
        {id: v1(), name: "Anna"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Velery"},
    ]

    let showDialogElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesData = [
        {id: v1(), message: "Hello, how is your IT-KAMASUTRA"},
        {id: v1(), message: "Hello, que tal es tu IT-KAMASUTRA"},
        {id: v1(), message: "Привет, как твоя IT-KAMASUTRA"}
    ]

    let showMessageElemets = messagesData.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div>
            <div className={style.dialogs_global}>
                <div className={style.dialogs}>
                    {showDialogElements}
                </div>
                <div className={style.messages}>
                    {showMessageElemets}
                </div>
            </div>

        </div>
    )
}

export default Dialogs;