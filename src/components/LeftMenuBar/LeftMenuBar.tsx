import React from "react";
import newsfeed from "../../img/facebook.png";
import badges from "../../img/dribbble.png";
import exploreStories from "../../img/google_plus.png";
import popularGroups from "../../img/instagram.png";
import authorProfile from "../../img/linkedin.png";
import style from './LeftMenuBar.module.css'
import {NavLink} from "react-router-dom";

type NavLinkType = {
    children: string,
    href: string,
};

const LeftMenuBar = () => {
    return (
        <div className={style.leftMenu}>
            <h5 className={style.boxMenuName}>News Feeds</h5>
            <div className={style.itemLink}>
                <img className={style.iconMenu} src={newsfeed} alt=""/>
                <span className={style.linkName}>
                    <NavLink to="/profile" activeClassName={style.activeLink}>
                        News page
                    </NavLink>
                </span>
            </div>
            <div className={style.itemLink}>
                <img className={style.iconMenu} src={badges} alt=""/>
                <span className={style.linkName}>
                    <NavLink to="/dialogs" activeClassName={style.activeLink}>
                    Dialogs
                </NavLink>
                </span>
            </div>
            <div className={style.itemLink}>
                <img className={style.iconMenu} src={badges} alt=""/>
                <span className={style.linkName}>
                    <NavLink to="/users" activeClassName={style.activeLink}>
                    Users
                </NavLink>
                </span>
            </div>
            <div className={style.itemLink}>
                <img className={style.iconMenu} src={exploreStories} alt=""/>
                <span className={style.linkName}>
                    <NavLink to="/news" activeClassName={style.activeLink}>
                        News
                    </NavLink>
                </span>
            </div>
            <div className={style.itemLink}>
                <img className={style.iconMenu} src={popularGroups} alt=""/>
                <span className={style.linkName}>
                    <NavLink to="/music" activeClassName={style.activeLink}>
                        Music
                    </NavLink>
                </span>
            </div>
            <div className={style.itemLink}>
                <img className={style.iconMenu} src={authorProfile} alt=""/>
                <span className={style.linkName}>
                    <NavLink to="/settings" activeClassName={style.activeLink}>
                        Settings
                    </NavLink>
                </span>
            </div>
        </div>
    )
}

export default LeftMenuBar