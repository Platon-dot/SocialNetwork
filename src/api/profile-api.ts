import axios from "axios";

export type contactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string
    contacts: contactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string
        large: string
    }
}

// export type ProfileResponseType = {
//     profile: ProfileType
// }

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
    getProfiles(profile: number) {
        return instance.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${profile}`)
    }
}
