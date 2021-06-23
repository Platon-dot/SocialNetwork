import React from "react";

const NewsBox = () => {
    return <div className="news">
        <div className="image_for_news">
            <img
                src="https://img.freepik.com/free-vector/hands-holding-earphones-communicate-in-instant-messengers-by-voice-messages-audio-chat-application-social-media-online-communication-concept-horizontal-vector-illustration_48369-36729.jpg?size=626&ext=jpg&ga=GA1.2.1719178491.1616889600"
                alt=""/>
        </div>
        <div className="news_posts">
            My posts
            <div>
                New posts
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    </div>
}

export default NewsBox