import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {followAC, isFetchingAC, unFollowAC} from "../../redux/users-reducer";
import styles from './Users.module.css'
import {UsersType} from "../../api/users-api";
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import Paginator from "../../paginator/paginator";

const Users = () => {
    let dispatch = useDispatch()
    let users = useSelector<RootStateType, UsersType[]>((state) => state.usersReducer.items)
    let fetching = useSelector<RootStateType, boolean>(state => state.usersReducer.isFetching)

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
                    {fetching ? <Spinner animation="border" variant="primary"/> : null}
                </Col>
                <Col className="col-lg-10">
                    <Paginator/>
                </Col>
            </Row>
            {users.map(userT => {
                return (
                    <Container className="container-sm "
                               key={userT.id}>
                        <Row className="justify-content-center m-5">
                            <Col className="col col-lg-2 bg-light">
                                <img
                                    src={userT.photos.small}
                                    alt="avatar"
                                    className={styles.userPhoto}/>
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