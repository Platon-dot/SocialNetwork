import {v1} from "uuid";
import {PostsType, ProfilePageType} from "./state";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

const profileReducer = (state: ProfilePageType, action: any): ProfilePageType => {

    switch (action.type) {
        //let copyState = {...state}
        case ADD_POST : {
            const newPost: PostsType = {
                id: v1(),
                name: "Sonia",
                message: state.newPostText,
                likes: 0
            };
            //copyState.userPosts.push(newPost);
            //copyState.newPostText = ""
            //return copyState
            return {
                ...state,
                userPosts: [newPost, ...state.userPosts]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            //copyState.newPostText = action.newPostText
            //return copyState
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        default:
            return state
    }
};


export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}

export const onPostChangeAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}


export default profileReducer
