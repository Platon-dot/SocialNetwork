import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import {sideBarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import thunk from "redux-thunk";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

let reducersSet = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sideBarReducer: sideBarReducer,
    usersReducer: usersReducer,
    authReducer: authReducer
})

export type RootStateType = ReturnType<typeof reducersSet>

export let store = createStore(reducersSet, applyMiddleware(thunk))
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
//@ts-ignore
window.store = store