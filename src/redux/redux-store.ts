import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {sideBarReducer} from "./sidebar-reducer";

let reducersSet = combineReducers({
    profileReducer,
    dialogsReducer,
    sideBarReducer
})

export type RootStateType = ReturnType<typeof reducersSet>

export let store = createStore(reducersSet)
//@ts-ignore
window.store = store