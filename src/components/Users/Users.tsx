import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {changeSelectedPageAC, followAC, setUsersTC, unFollowAC} from "../../redux/users-reducer";
import styles from './Users.module.css'
import {UsersResponseType} from "../../api/users-api";
import {Button, Col, Container, Nav, NavLink, Row, Spinner} from "react-bootstrap";
import Paginator from "../../paginator/paginator";
import {useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";

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

    let {items, isFetching} = useSelector<RootStateType, UsersResponseType>(state => state.usersReducer)

    const followHandler = (userId: number) => {
        dispatch(followAC(userId))
    }
    const unFollowHandler = (userId: number) => {
        dispatch(unFollowAC(userId))
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
            {items.map(userT => {
                return (
                    <Container className="container-sm "
                               key={userT.id}>
                        <Row className="justify-content-center m-5">
                            <Col className="col col-lg-2 bg-light">
                                <NavLink href={`/profilePage/${userT.id}`}>
                                    <img
                                        src={userT.photos.small !== null ? userT.photos.small : 'http://sociala.uitheme.net/assets/images/user-8.png'}
                                        alt="avatar"
                                        className={styles.userPhoto}/>
                                </NavLink>
                            </Col>
                            <Col className="col col-lg-2 bg-light">
                                {userT.name}
                                {userT.status}
                            </Col>
                            <Col className="col col-lg-2 bg-light">
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