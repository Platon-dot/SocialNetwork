import {Dispatch} from "redux";
import {usersAPI, UsersResponseType, UsersType} from "../api/users-api";


const initialState: UsersResponseType = {
    items: [],
    totalCount: 0,
    error: ''
}
//     {
//         id: v1(),
//         avatarUrl: 'http://uitheme.net/sociala/images/user_2.png',
//         followed: false,
//         fullName: 'Marta',
//         status: 'I am a boss',
//         location: {city: 'Barcelona', country: 'Spain'}
//     },
//     {
//         id: v1(),
//         avatarUrl: 'http://uitheme.net/sociala/images/user-22.png',
//         followed: true,
//         fullName: 'Abdula',
//         status: 'I am a subordinate',
//         location: {city: 'Madrid', country: 'Spain'}
//     },
//     {
//         id: v1(),
//         avatarUrl: 'http://uitheme.net/sociala/images/user_1.png',
//         followed: false,
//         fullName: 'Joan',
//         status: 'I am somebody',
//         location: {city: 'Valencia', country: 'Spain'}
//     },



export const usersReducer = (state: UsersResponseType = initialState, action: UsersActionType): UsersResponseType => {
    switch (action.type) {
        case 'SET-USERS':
            return {
                ...state,
                items: action.arrayUsers
            }
        case 'FOLLOW-USERS': {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW-USERS': {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        default:
            return state
    }
};

export const setUsersAC = (arrayUsers: UsersType[]) => ({type: 'SET-USERS', arrayUsers} as const)
export const followAC = (userId: number) => ({type: 'FOLLOW-USERS', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW-USERS', userId} as const)


export type UsersActionType =
    followACActionType |
    unFollowACActionType |
    setUsersActionType

type followACActionType = ReturnType<typeof followAC>
type unFollowACActionType = ReturnType<typeof unFollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>


export const setUsersTC = (dispatch: Dispatch) => {
    usersAPI.getUsers()
        .then((res) => {
            dispatch(setUsersAC(res.data.items))
        })
}
