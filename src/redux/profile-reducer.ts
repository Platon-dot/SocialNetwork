import {v1} from "uuid";
import {Dispatch} from "redux";
import {contactsType, profileAPI, ProfileType} from "../api/profile-api";


const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

export type PostsType = {
    id: string
    name: string
    message: string
    likes: number
}

export type ProfileResponseType = {
    profile: ProfileType
    userPosts: PostsType[]
    newPostText: string
    status: string
}

const initialState: ProfileResponseType = {
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 1,
        photos: {
            small: '',
            large: ''
        }
    },
    userPosts: [
        {id: v1(), name: "Juan", message: "Privet Alinka", likes: 48},
        {id: v1(), name: "Jenifer", message: "Hi bratishka", likes: 35},
        {id: v1(), name: "Katia", message: "Hola Joan", likes: 65},
    ],
    newPostText: "",
    status: ""
}


export const profileReducer = (state: ProfileResponseType = initialState, action: ProfileActionType): ProfileResponseType => {
    switch (action.type) {
        case "SET-USERS-PROFILE":
            return {...state, profile: action.profile}
        case "ADD-POST" : {
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
        case "profile-reducer/SET-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
};


export const addPostAC = () => ({type: "ADD-POST"} as const)

export const onPostChangeAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}
export const setProfilesAC = (profile: ProfileType) => ({type: 'SET-USERS-PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: 'profile-reducer/SET-STATUS', status} as const)


export type ProfileActionType =
    addPostActionType | onPostChangeActionType |
    setProfilesActionType | setStatusActionType

type addPostActionType = ReturnType<typeof addPostAC>
type onPostChangeActionType = ReturnType<typeof onPostChangeAC>
type setProfilesActionType = ReturnType<typeof setProfilesAC>
type setStatusActionType = ReturnType<typeof setStatusAC>


export const setProfilesTS = (profile: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfiles(profile)
            .then((res) => {
                dispatch(setProfilesAC(res.data))
            })
    }
}

export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then((res) => {
                // dispatch(setStatusAC(res.data))
                console.log(res)
            })
    }
}


