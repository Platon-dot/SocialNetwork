import React from "react";
import newsfeed from "../../img/facebook.png";
import badges from "../../img/dribbble.png";
import exploreStories from "../../img/google_plus.png";
import popularGroups from "../../img/instagram.png";
import authorProfile from "../../img/linkedin.png";
import style from './MenuBox.module.css'
import {NavLink} from "react-router-dom";

type NavLinkType = {
    children: string,
    href: string,
};

const MenuBox = () => {
    return (
        <div className={style.menu}>
            <h5>News Feeds</h5>
            <div className={style.item}>
                <img className={style.icon} src={newsfeed} alt=""/>
                <span>
                    <NavLink to="/newsbox" activeClassName={style.activeLink}>
                        News page
                    </NavLink>
                </span>
            </div>
            <div className={style.item}>
                <img className={style.icon} src={badges} alt=""/>
                <span>
                    <NavLink to="/dialogs" activeClassName={style.activeLink}>
                    Dialogs
                </NavLink>
                </span>
            </div>
            <div className={style.item}>
                <img className={style.icon} src={exploreStories} alt=""/>
                <span>
                    <NavLink to="/news" activeClassName={style.activeLink}>
                        News
                    </NavLink>
                </span>
            </div>
            <div className={style.item}>
                <img className={style.icon} src={popularGroups} alt=""/>
                <span>
                    <NavLink to="/music" activeClassName={style.activeLink}>
                        Music
                    </NavLink>
                </span>
            </div>
            <div className={style.item}>
                <img className={style.icon} src={authorProfile} alt=""/>
                <span>
                    <NavLink to="/settings" activeClassName={style.activeLink}>
                        Settings
                    </NavLink>
                </span>
            </div>
        </div>
    )
}

export default MenuBox