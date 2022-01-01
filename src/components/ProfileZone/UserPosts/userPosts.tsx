import React, {ChangeEvent, useState} from "react";
import style from './userPosts.module.css';
import {Card, Col, Container, Row} from "react-bootstrap";

export type UsePostsPropsType = {
    userName: string
    message: string
    likeCounts: number
    id: string
}

const UserPosts = (props: UsePostsPropsType) => {

    const [status, setStatus] = useState('hola')
    const [editMode, setEditMode] = useState(true)

    const activateEditMode = () => {
        setEditMode(false)
    }

    const changeInputTextProfile = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const activateViewMode = () => {
        setEditMode(true)
    }

    return (
        <Container className={style.container}>

            <Card style={{width: '35rem'}} className={style.card}>
                <Row className="justify-content-center">
                    <Col md={{span: "auto", offset: 0}}>
                        {props.userName}
                    </Col>
                    <Col md={{span: "auto", offset: 4}}>
                        <span>my status: </span>
                        {editMode ?
                            <span onDoubleClick={activateEditMode}>
                                    {status}
                                </span>
                            :
                            <input
                                type="text"
                                value={status}
                                className={style.inputUserProfileMassage}
                                onChange={changeInputTextProfile}
                                onBlur={activateViewMode}
                                autoFocus
                            />}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <img className={style.userProfilePhoto}
                             src="https://www.1zoom.ru/big2/58/195128-Sepik.jpg"
                             alt="userAvatar"/>
                    </Col>
                    <Col>
                        {props.message}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={{span: 3, offset: 9}}>
                        <span>{props.likeCounts} Like</span>
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}

export default UserPosts