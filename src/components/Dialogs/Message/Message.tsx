import React from "react";
import style from './../Dialogs.module.css';
import {MessagesType} from "../../../redux/state";


const Message = (props: MessagesType) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}


export default Message;