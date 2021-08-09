import {v1} from "uuid";

type subscribeType = {
    subscriber: () => void
}


// I need a variable without typing problems


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
    newPostText: string
}

type DialogsPageTypes = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageTypes
}


// export const addPost = () => {
//     const newPost: PostsType = {
//         id: v1(),
//         name: "Sonia",
//         message: state.profilePage.newPostText,
//         likes: 0
//     };
//     state.profilePage.userPosts.unshift(newPost);
//     state.profilePage.newPostText = ""
//     onChange()
// };


export type StoreType = {
    _state: RootStateType
    updateNewPostText: (userMessage: string) => void,
    addPost: () => void,
    _onChange: () => void,
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
}

export const store: StoreType = {
    _state: {
        profilePage: {
            userPosts: [
                {id: v1(), name: "Juan", message: "Privet Alinka", likes: 48},
                {id: v1(), name: "Jenifer", message: "Hi bratishka", likes: 35},
                {id: v1(), name: "Katia", message: "Hola Joan", likes: 65},
            ],
            newPostText: ""
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
    },
    updateNewPostText(userMessage: string) {
        this._state.profilePage.newPostText = userMessage
        this._onChange()
    },
    addPost() {
        const newPost: PostsType = {
            id: v1(),
            name: "Sonia",
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.userPosts.unshift(newPost);
        this._state.profilePage.newPostText = ""
        this._onChange()
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._onChange = callback // publisher - subscriber
    },
    getState() {
        return this._state;
    }
}

export default store;

