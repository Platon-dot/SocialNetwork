import React from "react";
import newsfeed from "../../img/facebook.png";
import badges from "../../img/dribbble.png";
import exploreStories from "../../img/google_plus.png";
import popularGroups from "../../img/instagram.png";
import authorProfile from "../../img/linkedin.png";
import style from './MenuBox.module.css'

const MenuBox = () => {
    return <div className={style.menu}>
        <h5>News Feeds</h5>
        <div className={style.item}>
            <img className={style.icon} src={newsfeed} alt=""/>
            <span> <a href="#">Newsfeed</a> </span>
        </div>
        <div className={style.item}>
            <img className={style.icon} src={badges} alt=""/>
            <span> <a href="#">Badges</a> </span>
        </div>
        <div className={style.item}>
            <img className={style.icon} src={exploreStories} alt=""/>
            <span> <a href="#">Explore Stories</a> </span>
        </div>
        <div className={style.item}>
            <img className={style.icon} src={popularGroups} alt=""/>
            <span> <a href="#">Popular Groups</a> </span>
        </div>
        <div className={style.item}>
            <img className={style.icon} src={authorProfile} alt=""/>
            <span> <a href="#">Author Profile</a> </span>
        </div>
    </div>
}

export default MenuBox