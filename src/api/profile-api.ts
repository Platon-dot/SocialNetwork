import axios from "axios";
import {PhotosType} from "./users-api";

type contactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfileResponseType = {
    aboutMe: string
    contacts: contactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
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

export const profileAPI = {
    getProfiles() {
        return instance.get<PhotosType>(`https://social-network.samuraijs.com/api/1.0/profile/${21398}`)
    }
}