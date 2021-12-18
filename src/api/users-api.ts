import axios from "axios";

export type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    name: string,
    id: number,
    photos: PhotosType,
    status:string,
    followed: boolean
}
export type UsersResponseType = {
    items: UsersType[],
    totalCount: number,
    error: string,
    pageSize: number,
    selectedPage: number
    isFetching: boolean
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

export const usersAPI = {
    getUsers(selectedPage: number, count: number) {
        return instance.get<UsersResponseType>(`/users?page=${selectedPage}&count=${count}`)
    }
}
