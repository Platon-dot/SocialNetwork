import {Dispatch} from "redux";
import {usersAPI, UsersResponseType, UsersType} from "../api/users-api";


const initialState: UsersResponseType = {
    items: [],
    totalCount: 0,
    error: '',
    pageSize: 5,
    selectedPage: 1,
    isFetching: true
}
export const usersReducer = (state: UsersResponseType = initialState, action: UsersActionType): UsersResponseType => {
    switch (action.type) {
        case 'SET-USERS':
            return {...state, items: action.arrayUsers}
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
        case 'TOTAL-COUNT': {
            return {...state, totalCount: action.totalCount}
        }
        case 'CHANGE-SELECTED-PAGE': {
            return {...state, selectedPage: action.selectedPage}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
};

export const setUsersAC = (arrayUsers: UsersType[]) => ({type: 'SET-USERS', arrayUsers} as const)
export const followAC = (userId: number) => ({type: 'FOLLOW-USERS', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW-USERS', userId} as const)
export const setTotalCountAC = (totalCount: number) => ({type: 'TOTAL-COUNT', totalCount} as const)
export const changeSelectedPageAC = (selectedPage: number) => ({type: 'CHANGE-SELECTED-PAGE', selectedPage} as const)
export const isFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

export type UsersActionType =
    followACActionType |
    unFollowACActionType |
    setUsersActionType |
    setTotalCountActionType |
    changeSelectedPageActionType |
    isFetchingActionType

type followACActionType = ReturnType<typeof followAC>
type unFollowACActionType = ReturnType<typeof unFollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>
type setTotalCountActionType = ReturnType<typeof setTotalCountAC>
type changeSelectedPageActionType = ReturnType<typeof changeSelectedPageAC>
type isFetchingActionType = ReturnType<typeof isFetchingAC>


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
