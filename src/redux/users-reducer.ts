import {v1} from "uuid";

type UsersLocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: string,
    avatarUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: UsersLocationType
}
export type UsersPageType = {
    users: UserType[]
}

const initialState: UsersPageType = {
    users: [
        {
            id: v1(),
            avatarUrl: 'http://uitheme.net/sociala/images/user_2.png',
            followed: false,
            fullName: 'Marta',
            status: 'I am a boss',
            location: {city: 'Barcelona', country: 'Spain'}
        },
        {
            id: v1(),
            avatarUrl: 'http://uitheme.net/sociala/images/user-22.png',
            followed: true,
            fullName: 'Abdula',
            status: 'I am a subordinate',
            location: {city: 'Madrid', country: 'Spain'}
        },
        {
            id: v1(),
            avatarUrl: 'http://uitheme.net/sociala/images/user_1.png',
            followed: false,
            fullName: 'Joan',
            status: 'Deniska',
            location: {city: 'Valencia', country: 'Spain'}
        },
    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionType): UsersPageType => {
    switch (action.type) {
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case 'FOLLOW-USERS': {
            return {
                ...state,
                users: state.users.map(u => {
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
                users: state.users.map(u => {
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


export const followAC = (userId: string) => ({type: 'FOLLOW-USERS', userId} as const)
export const unFollowAC = (userId: string) => ({type: 'UNFOLLOW-USERS', userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)

export type UsersActionType = followACActionType | unFollowACActionType | setUsersActionType
type followACActionType = ReturnType<typeof followAC>
type unFollowACActionType = ReturnType<typeof unFollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>