import React from 'react';
import {Button, Col, Container, NavLink, Row} from "react-bootstrap";
import styles from "./Users.module.css";
import {UsersResponseType, UsersType} from "../../api/users-api";


export type UsersBodyType = {
    items: UsersType[]
    followUnfollowHandler: any
}

export const UsersBody = (props: UsersBodyType) => {
    return (
        <>
            {props.items.map(userT => {
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
                            <Col className={`col col-lg-2 bg-light ${styles.userInfo}`}>
                                {userT.name}
                                {userT.status}
                            </Col>
                            <Col className="col col-lg-2 bg-light justify-content-center ">
                                    <Button
                                        className="mt-3"
                                        variant="outline-primary"
                                        onClick={() => props.followUnfollowHandler(userT.id, userT.followed)}>
                                        {!userT.followed ? "FOLLOW" : "UNFOLLOW"}
                                    </Button>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </>
    );
};
