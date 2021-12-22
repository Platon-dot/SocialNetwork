import {Dispatch} from "redux";
import {usersAPI, UsersResponseType, UsersType} from "../api/users-api";

const initialState: UsersResponseType = {
    items: [],
    totalCount: 0,
    error: '',
    pageSize: 5,
    selectedPage: 1,
    isFetching: true,
    followingInProgress: false
}

export const usersReducer = (state: UsersResponseType = initialState, action: UsersActionType): UsersResponseType => {
    switch (action.type) {
        case 'SET-USERS':
            return {...state, items: action.arrayUsers}
        // case 'FOLLOW-USERS': {
        //     return {
        //         ...state,
        //         items: state.items.map(u => {
        //             if (u.id === action.userId) {
        //                 return {...u, followed: true}
        //             }
        //             return u
        //         })
        //     }
        // }
        case 'FOLLOW-UNFOLLOW-USERS': {
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }
        }
        case 'TOTAL-COUNT': {
            return {...state, totalCount: action.totalCount}
        }
        case 'CHANGE-SELECTED-PAGE': {
            return {...state, selectedPage: action.selectedPage}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {...state, followingInProgress: action.followingInProgress}
        }
        default:
            return state
    }
};

export const setUsersAC = (arrayUsers: UsersType[]) => ({type: 'SET-USERS', arrayUsers} as const)
export const followUnfollowAC = (userId: number) => ({type: 'FOLLOW-UNFOLLOW-USERS', userId} as const)
export const setTotalCountAC = (totalCount: number) => ({type: 'TOTAL-COUNT', totalCount} as const)
export const changeSelectedPageAC = (selectedPage: number) => ({type: 'CHANGE-SELECTED-PAGE', selectedPage} as const)
export const isFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleIsFollowingProgressAC = (followingInProgress: boolean) => ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', followingInProgress} as const)

export type UsersActionType =
    followUnfollowACActionType |
    setUsersActionType |
    setTotalCountActionType |
    changeSelectedPageActionType |
    isFetchingActionType |
    toggleIsFetchingActionType

type setUsersActionType = ReturnType<typeof setUsersAC>
type setTotalCountActionType = ReturnType<typeof setTotalCountAC>
type changeSelectedPageActionType = ReturnType<typeof changeSelectedPageAC>
type followUnfollowACActionType = ReturnType<typeof followUnfollowAC>
type isFetchingActionType = ReturnType<typeof isFetchingAC>
type toggleIsFetchingActionType = ReturnType<typeof toggleIsFollowingProgressAC>



export const setUsersTC = (selectedPage: number, count: number) => {
    return (dispatch: Dispatch) => {
        dispatch(isFetchingAC(true))
        usersAPI.getUsers(selectedPage, count)
            .then((res) => {
                dispatch(setUsersAC(res.data.items))
                dispatch(setTotalCountAC(res.data.totalCount))
                dispatch(isFetchingAC(false))
            })
    }
}

export const followUserTC = (userId: number, value: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgressAC(true))
        usersAPI.followUnfollowUser(userId, value)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(followUnfollowAC(userId))
                    dispatch(toggleIsFollowingProgressAC(false))
                }
            })
    }
}


