import React from "react";
import {NavLink} from "react-router-dom";
import style from './../Dialogs.module.css';
import {DialogProps} from "../Dialogs";


const DialogItem = (props: DialogProps) => {
    let path = "/dialogs/" + props.id
    return (
        // <div className={style.dialog + ' ' + style.active}>
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;