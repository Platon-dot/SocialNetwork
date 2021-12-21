import {Dispatch} from "redux";
import {usersAPI, UsersResponseType, UsersType} from "../api/users-api";
import {authAPI, AuthType, dataAuthType} from "../api/auth-api";
import {AxiosResponse} from "axios";

export type authResponseType = {
    data: dataAuthType
    isAuth: boolean
}

const initialState: authResponseType = {
    data: {} as dataAuthType,
    isAuth: false
}

export const authReducer = (state: authResponseType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
};

export const setUsersDataAC = (id: number, email: string, login: string) =>
    ({type: 'SET-AUTH-USER-DATA', data: {id, email, login}} as const)

export type AuthActionType = setAuthUsersActionType

type setAuthUsersActionType = ReturnType<typeof setUsersDataAC>


export const setAuthUserTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setUsersDataAC(id, email, login))
                    console.log(id, email, login)
                }
            })
    }
}


