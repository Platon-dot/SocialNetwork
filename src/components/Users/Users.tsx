import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, setUsersTC, unFollowAC} from "../../redux/users-reducer";
import styles from './Users.module.css'
import {usersAPI, UsersType} from "../../api/users-api";

const Users = () => {
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUsersTC)
    }, [])

    let users = useSelector<RootStateType, UsersType[]>(
        (state) => state.usersReducer.items)
    console.log(users)

    const followHandler = (userId: number) => {
        dispatch(followAC(userId))
    }
    const unFollowHandler = (userId: number) => {
        dispatch(unFollowAC(userId))
    }
    const setUsers = (users: UsersType[]) => {
        dispatch(setUsersAC(users))
    }

    return (
        <>
            {
                users.map(userT => {
                    return (
                        <div key={userT.id}>
                            <span>
                                <div>
                                    <img
                                        src={userT.photos.small}
                                        alt='avatar'
                                        className={styles.userPhoto}/>
                                </div>
                                <div className={styles.buttonBlock}>
                                    {!userT.followed ?
                                        <button
                                            className={styles.userButton}
                                            onClick={() => followHandler(userT.id)}>
                                            FOLLOW
                                        </button>
                                        :
                                        <button
                                            className={styles.userButton}
                                            onClick={() => unFollowHandler(userT.id)}>
                                            UNFOLLOW
                                        </button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{userT.name}</div>
                                    <div>{userT.status}</div>
                                </span>
                                {/*<span>*/}
                                {/*    <div>{userT.}</div>*/}
                                {/*    <div>{userT.location.country}</div>*/}
                                {/*</span>*/}
                            </span>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Users;