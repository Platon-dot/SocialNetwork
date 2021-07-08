import React from "react";
import style from './../Dialogs.module.css';
import {MessagesProps} from "../Dialogs";


const Message = (props: MessagesProps) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}


export default Message;