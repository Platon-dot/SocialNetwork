import React from "react";
import {NavLink} from "react-router-dom";
import style from './../Dialogs.module.css';
import {DialogsType} from "../../../redux/dialogs-reducer";

const DialogItem = (props: DialogsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;