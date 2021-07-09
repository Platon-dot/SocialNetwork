import React from "react";
import style from './NewsGeneralZone.module.css';
import UserPosts from "./UserPosts/userPosts";
import NewUserMessage from "./NewMessage/NewUserMessage";
import {PostsType} from "../../redux/state";


type NewsGeneralZoneType = {
    userPosts: Array<PostsType>
}

const NewsGeneralZone = (props: NewsGeneralZoneType) => {

    let showPost = props.userPosts.map(p => (
        <UserPosts id={p.id} userName={p.name} message={p.message} likeCounts={p.likes} key={p.id}/>)
    )

    return (
        <div>
            <div className={style.image_for_news}>
                <img
                    src="https://img.freepik.com/free-vector/hands-holding-earphones-communicate-in-instant-messengers-by-voice-messages-audio-chat-application-social-media-online-communication-concept-horizontal-vector-illustration_48369-36729.jpg?size=626&ext=jpg&ga=GA1.2.1719178491.1616889600"
                    alt=""/>
            </div>

            <NewUserMessage/>

            <div className={style.userPost}>
                {showPost}
            </div>
        </div>
    )
}

export default NewsGeneralZone