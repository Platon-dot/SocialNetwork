import {v1} from "uuid";

type ProfileActionType = addPostActionType | onPostChangeActionType


type addPostActionType = {
    type: "ADD_POST",
}

type onPostChangeActionType = {
    type: "UPDATE_NEW_POST_TEXT",
    newPostText: string
}

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

export type PostsType = {
    id: string
    name: string
    message: string
    likes: number
}

export type ProfilePageType = {
    userPosts: Array<PostsType>
    newPostText: string
}

const initialState = {
    userPosts: [
        {id: v1(), name: "Juan", message: "Privet Alinka", likes: 48},
        {id: v1(), name: "Jenifer", message: "Hi bratishka", likes: 35},
        {id: v1(), name: "Katia", message: "Hola Joan", likes: 65},
    ],
    newPostText: ""
}


const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST : {
            const newPost: PostsType = {
                id: v1(),
                name: "Sonia",
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                userPosts: [newPost, ...state.userPosts]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        default:
            return state
    }
};


export const addPostAC = (): addPostActionType => {
    return {
        type: ADD_POST,
    } as const
}

export const onPostChangeAC = (newPostText: string): onPostChangeActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}


export default profileReducer
