import React from "react";
import newsfeed from "../img/facebook.png";
import badges from "../img/dribbble.png";
import exploreStories from "../img/google_plus.png";
import popularGroups from "../img/instagram.png";
import authorProfile from "../img/linkedin.png";

const MenuBox = () => {
    return  <div className="menu">
        <h5>News Feeds</h5>
        <div className="item">
            <img className="icon" src={newsfeed} alt=""/>
            <span> <a href="#">Newsfeed</a> </span>
        </div>
        <div className="item">
            <img className="icon" src={badges} alt=""/>
            <span> <a href="#">Badges</a> </span>
        </div>
        <div className="item">
            <img className="icon" src={exploreStories} alt=""/>
            <span> <a href="#">Explore Stories</a> </span>
        </div>
        <div className="item">
            <img className="icon" src={popularGroups} alt=""/>
            <span> <a href="#">Popular Groups</a> </span>
        </div>
        <div className="item">
            <img className="icon" src={authorProfile} alt=""/>
            <span> <a href="#">Author Profile</a> </span>
        </div>
    </div>
}

export default MenuBox