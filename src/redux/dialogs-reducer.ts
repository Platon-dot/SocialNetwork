import {v1} from "uuid";
import {DialogsPageTypes} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = "SEND_MESSAGE"

const dialogsReducer = (state: DialogsPageTypes, action: any): DialogsPageTypes => {
    let copyState = {...state}
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            copyState.newMessageBody = action.body
            return copyState
        }
        case SEND_MESSAGE: {
            let body = copyState.newMessageBody
            copyState.newMessageBody = ''
            copyState.messagesData.push({id: v1(), message: body})
            return copyState
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
