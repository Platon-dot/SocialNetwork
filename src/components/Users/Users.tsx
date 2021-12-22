import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    changeSelectedPageAC,
    followUserTC,
    setUsersTC,
} from "../../redux/users-reducer";
import {UsersResponseType} from "../../api/users-api";
import {Col, Row, Spinner} from "react-bootstrap";
import Paginator from "../../paginator/paginator";
import {useEffect} from "react";
import {UsersBody} from "./UsersBody";

const Users = () => {

    let dispatch = useDispatch()
    let {totalCount, pageSize, selectedPage} =
        useSelector<RootStateType, UsersResponseType>((state) =>
            state.usersReducer)

    useEffect(() => {
        dispatch(setUsersTC(selectedPage, pageSize))
    }, [])

    const activeSelected = (selectedPage: number) => {
        dispatch(setUsersTC(selectedPage, pageSize))
        dispatch(changeSelectedPageAC(selectedPage))
    }

    let {items, isFetching, followingInProgress} = useSelector<RootStateType, UsersResponseType>(state => state.usersReducer)

    const followUnfollowHandler = (userId: number, value: boolean) => {
        console.log(value)
        dispatch(followUserTC(userId, value))
    }

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