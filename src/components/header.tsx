import React from "react";
import logo from "../img/logotype.png";

const Header = () => {
    return <div>
        <div className="logo header">
            <img src={logo} alt="logo"/>
        </div>
        <div className="searchpanel header">
            <input type="text" placeholder="Start typing to search.."/>
        </div>
    </div>
}

export default Header