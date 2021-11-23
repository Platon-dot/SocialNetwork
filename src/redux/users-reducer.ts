import {v1} from "uuid";

type UsersLocationType = {
    city: string,
    country: string
}
type UserType = {
    id: string;
    followed: boolean,
    fullName: string,
    status: string,
    location: UsersLocationType
}
type UsersPageType = {
    users: UserType[]
}

const initialState: UsersPageType = {
    users: [
        // {
        //     id: v1(),
        //     followed: false,
        //     fullName: 'Alexey',
        //     status: 'I am a boss',
        //     location: {city: 'Barcelona', country: 'Spain'}
        // },
        // {
        //     id: v1(),
        //     followed: true,
        //     fullName: 'Albert',
        //     status: 'I am a subordinate',
        //     location: {city: 'Madrid', country: 'Spain'}
        // },
        // {
        //     id: v1(),
        //     followed: false,
        //     fullName: 'Joan',
        //     status: 'I am a boss too',
        //     location: {city: 'Valencia', country: 'Spain'}
        // },
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
export const setUsersAC = (users: any) => ({type: 'SET-USERS', users} as const)

export type UsersActionType = followACActionType | unFollowACActionType | setUsersActionType
type followACActionType = ReturnType<typeof followAC>
type unFollowACActionType = ReturnType<typeof unFollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>