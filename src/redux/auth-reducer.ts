import {Dispatch} from "redux";
import {authAPI,dataAuthType} from "../api/auth-api";

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
            return {...state, data: action.data, isAuth: true}
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
                }
            })
    }
}


