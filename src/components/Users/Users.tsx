import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import styles from './Users.module.css'

const Users = () => {

    let dispatch = useDispatch()
    let users = useSelector((state: RootStateType) => state.usersReducer.users)

    const followHandler = (userId: string) => {
        dispatch(followAC(userId))
    }
    const unFollowHandler = (userId: string) => {
        dispatch(unFollowAC(userId))
    }
    const setUsers = (users: UserType[]) => {
        dispatch(setUsersAC(users))
    }

    return (
        <>
            {
                users.map(userMap => {
                    return (
                        <div key={userMap.id}>
                            <span>
                                <div>
                                    <img
                                        src={userMap.avatarUrl}
                                        alt='avatar'
                                        className={styles.userPhoto}/>
                                </div>
                                <div className={styles.buttonBlock}>
                                    {!userMap.followed ?
                                        <button
                                            className={styles.userButton}
                                            onClick={() => followHandler(userMap.id)}>
                                            FOLLOW
                                        </button>
                                        :
                                        <button
                                            className={styles.userButton}
                                            onClick={() => unFollowHandler(userMap.id)}>
                                            UNFOLLOW
                                        </button>
                                    }

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{userMap.fullName}</div>
                                    <div>{userMap.status}</div>
                                </span>
                                <span>
                                    <div>{userMap.location.city}</div>
                                    <div>{userMap.location.country}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Users;