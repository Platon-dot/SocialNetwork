import React, {FormEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {followAC, unFollowAC} from "../../redux/users-reducer";
import styles from './Users.module.css'
import {UsersType} from "../../api/users-api";
import {Button, Col, Container, Row} from "react-bootstrap";
import Paginator from "../../paginator/paginator";

const Users = () => {

    let dispatch = useDispatch()

    let users = useSelector<RootStateType, UsersType[]>((state) => state.usersReducer.items)

    const followHandler = (userId: number) => {
        dispatch(followAC(userId))
    }
    const unFollowHandler = (userId: number) => {
        dispatch(unFollowAC(userId))
    }

    // const activeSelected = (selectedPage: number) => {
    //     dispatch(setUsersTC(selectedPage, pageSize))
    //     dispatch(changeSelectedPageAC(selectedPage))
    // }
    // let pagesCount = Math.ceil(totalCount / pageSize)
    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }
    // const [portionNumber, setPortionNumber] = useState(1)
    // let leftPage = (portionNumber - 1) * pageSize + 1
    // let rightPage = portionNumber * pageSize

    return (
        <>
            <Paginator/>
            {
                users.map(userT => {
                    return (
                        <Container key={userT.id}>
                            <Row>
                                <Col
                                    md={{span: 3, offset: 3}}>
                                    <div>
                            <span>
                                <div className="m-1">
                                    <img
                                        src={userT.photos.small}
                                        alt='avatar'
                                        className={styles.userPhoto}/>
                                </div>
                                <div>
                                    {!userT.followed ?
                                        <Button
                                            variant="outline-primary"
                                            onClick={() => followHandler(userT.id)}>
                                            FOLLOW
                                        </Button>
                                        :
                                        <Button
                                            variant="outline-primary"
                                            onClick={() => unFollowHandler(userT.id)}>
                                            UNFOLLOW
                                        </Button>
                                    }
                                </div>
                            </span>
                                        <span>
                                <span>
                                    <div className="m-1">{userT.name}</div>
                                    <div>{userT.status}</div>
                                </span>
                                            {/*<span>*/}
                                            {/*    <div>{userT.}</div>*/}
                                            {/*    <div>{userT.location.country}</div>*/}
                                            {/*</span>*/}
                            </span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    )
                })
            }
        </>
    )
};

export default Users;