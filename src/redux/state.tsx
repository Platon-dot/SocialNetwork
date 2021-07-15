import {v1} from "uuid";
import {renderTree} from "../render";

export type PostsType = {
    id: string
    name: string
    message: string
    likes: number
}

export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string,
    message: string
}

type ProfilePageType = {
    userPosts: Array<PostsType>
}

type DialogsPageTypes = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageTypes
}

let state: RootStateType = {

    profilePage: {
        userPosts: [
            {id: v1(), name: "Juan", message: "Privet Alinka", likes: 48},
            {id: v1(), name: "Jenifer", message: "Hi bratishka", likes: 35},
            {id: v1(), name: "Katia", message: "Hola Joan", likes: 65},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: v1(), name: "Platon"},
            {id: v1(), name: "Alina"},
            {id: v1(), name: "Anna"},
            {id: v1(), name: "Sveta"},
            {id: v1(), name: "Sasha"},
            {id: v1(), name: "Velery"},
        ],


        messagesData: [
            {id: v1(), message: "Hello, how is your IT-KAMASUTRA"},
            {id: v1(), message: "Hello, que tal es tu IT-KAMASUTRA"},
            {id: v1(), message: "Привет, как твоя IT-KAMASUTRA"}
        ]
    }
}


export const addPost = (postMessage: string) => {
    const newPost: PostsType = {
        id: v1(),
        name: "Sonia",
        message: postMessage,
        likes: 0
    };
    state.profilePage.userPosts.unshift(newPost);
    renderTree(state)
};

export default state;