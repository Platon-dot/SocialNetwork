import axios, {AxiosResponse} from "axios";
import {authResponseType} from "../redux/auth-reducer";

export type dataAuthType = {
    id: number
    login: string
    email: string
}

export type AuthType = {
    data: dataAuthType
    resultCode: number
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "bd989617-b1e7-48f3-b931-dc63118fa1e9"
    }
}
const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    ...settings
})

export const authAPI = {
    getAuth() {
        return instance.get<AuthType>(`/auth/me`)
    }
}
