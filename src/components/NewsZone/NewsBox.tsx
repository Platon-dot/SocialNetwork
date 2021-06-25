import React from "react";
import style from './NewsBox.module.css';
import UserPosts from "./UserPosts/userPosts";


const NewsBox = () => {
    return (
        <div className={style.news}>
            <div className={style.image_for_news}>
                <img
                    src="https://img.freepik.com/free-vector/hands-holding-earphones-communicate-in-instant-messengers-by-voice-messages-audio-chat-application-social-media-online-communication-concept-horizontal-vector-illustration_48369-36729.jpg?size=626&ext=jpg&ga=GA1.2.1719178491.1616889600"
                    alt=""/>
            </div>

            <div className={style.newPost}>
                <div className={style.lineNewPost}>
                    <a href="#" className={style.linkNewPost}>
                        <i className={style.logoNewPost}>
                        </i>
                        <button>Create Post</button>
                    </a>
                </div>
                <div className={style.userTextArea}>
                    <figure className={style.userAvatar}>
                    </figure>
                    <textarea name="message" className={style.userMessage} cols={30} rows={10}
                              placeholder="What's on your mind?">
                    </textarea>
                </div>
            </div>
            <div className={style.userPost}>
                <UserPosts userName={'Juan'} message={'Privet Alinka'} likeCounts={48}/>
                <UserPosts userName={'Jenifer'} message={'Hi bratishka'} likeCounts={35}/>
            </div>
        </div>
    )
}

export default NewsBox