import {v1} from "uuid";


type DialogsActionTypes = updateNewMessageBodyActionType | sendMessageActionType

type updateNewMessageBodyActionType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}

type sendMessageActionType = {
    type: "SEND_MESSAGE"
}

export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string,
    message: string
}

export type DialogsPageTypes = {
    dialogsData: DialogsType[]
    messagesData: MessagesType[]
    newMessageBody: string
}

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = "SEND_MESSAGE"

const initialState = {
    dialogsData: [
        {id: v1(), name: "Platon"},
        {id: v1(), name: "Alina"},
        {id: v1(), name: "Anna"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Velery"},
    ],
    messagesData: [
        {id: v1(), message: "Hello, how is your IT-KAMASUTRA"},
        {id: v1(), message: "Hello, que tal es tu IT-KAMASUTRA"},
        {id: v1(), message: "Привет, как твоя IT-KAMASUTRA"}
    ],
    newMessageBody: ""
}


const dialogsReducer = (state: DialogsPageTypes = initialState, action: DialogsActionTypes): DialogsPageTypes => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            // let copyState = {...state}
            // copyState.newMessageBody = action.body
            return {
                ...state, newMessageBody: action.body
            }
            // ({...copyState})

        }
        case SEND_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), message: state.newMessageBody}],
                newMessageBody: ''
            }
        }
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (textBody: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: textBody
    } as const
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}

export default dialogsReducer
