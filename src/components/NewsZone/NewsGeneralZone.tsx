import React from "react";
import style from './NewsGeneralZone.module.css';
import UserPosts, {UserPostsPropsType} from "./UserPosts/userPosts";
import NewUserMessage from "./NewMessage/NewUserMessage";
import {v1} from "uuid";

type postDataPropsTypes = {
    id: string,
    name: string,
    message: string,
    likes: number,
}

const NewsGeneralZone = (props: postDataPropsTypes) => {

    let posts = [
        {id: v1(), name: "Juan", message: "Privet Alinka", likes: 48},
        {id: v1(), name: "Jenifer", message: "Hi bratishka", likes: 35},
        {id: v1(), name: "Katia", message: "Hola Joan", likes: 65},
    ]

    let showPost = posts.map(p => (
        <UserPosts id={p.id} userName={p.name} message={p.message} likeCounts={p.likes}/>)
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