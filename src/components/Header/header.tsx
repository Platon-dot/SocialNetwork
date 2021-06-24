import React from "react";
import logo from "../../img/logotype.png";
import style from "./header.module.css";

const Header = () => {
    return <div className={style.top}>
        <div className={`${style.logo} ${style.header}`}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={style.search}>
            <input type="text" placeholder="Start typing to search.."/>
        </div>
    </div>
}

export default Header