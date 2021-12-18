import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import {sideBarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import thunk from "redux-thunk";
import {profileReducer} from "./profile-reducer";

let reducersSet = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sideBarReducer: sideBarReducer,
    usersReducer: usersReducer
})

export type RootStateType = ReturnType<typeof reducersSet>

export let store = createStore(reducersSet, applyMiddleware(thunk))
//@ts-ignore
window.store = store