import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/redux-store";
import {
    changeSelectedPageAC,
    followUserTC,
    setUsersTC,
} from "../../redux/users-reducer";
import {UsersResponseType} from "../../api/users-api";
import {Col, Row, Spinner} from "react-bootstrap";
import Paginator from "../../paginator/paginator";
import React, {useEffect} from "react";
import {UsersBody} from "./UsersBody";
import {Redirect} from "react-router-dom";

const Users = () => {

    const dispatch = useDispatch()
    const {totalCount, pageSize, selectedPage, items, isFetching, followingInProgress} =
        useAppSelector<UsersResponseType>((state) => state.usersReducer)

    const isAuth = useAppSelector<boolean>(state => state.authReducer.isAuth)

    useEffect(() => {
        dispatch(setUsersTC(selectedPage, pageSize))
    }, [])
    const activeSelected = (selectedPage: number) => {
        dispatch(setUsersTC(selectedPage, pageSize))
        dispatch(changeSelectedPageAC(selectedPage))

    }

    const followUnfollowHandler = (userId: number, value: boolean) => {
        dispatch(followUserTC(userId, value))
    }
    if (!isAuth) return <Redirect to="/login"/>
    return (
        <>
            <Row className="m-2">
                <Col className="col-lg-1">
                    {isFetching ? <Spinner animation="border" variant="primary"/> : null}
                </Col>
                <Col className="col-lg-10">
                    <Paginator
                        totalCount={totalCount}
                        pageSize={pageSize}
                        selectedPage={selectedPage}
                        activeSelected={activeSelected}/>
                </Col>
            </Row>
            <UsersBody
                items={items}
                followUnfollowHandler={followUnfollowHandler}
                followingInProgress={followingInProgress}
            />
        </>
    )
};

export default Users;
