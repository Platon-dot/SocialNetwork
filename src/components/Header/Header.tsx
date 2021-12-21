import React from "react";
import logo from "../../img/logotype.png";
import style from "./header.module.css";
import {Col, Form, NavLink, Row} from "react-bootstrap";

type HeaderType = {
    isAuth: boolean
    login: any
}

const Header = (props: HeaderType) => {

    const {isAuth, login} = props
    console.log(login)

    return <div className={style.top}>
        <div className={`${style.logo} ${style.header}`}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={style.search}>
            <input className={style.searchZone} type="text" placeholder="Start typing to search.."/>
        </div>
        {/*<div>*/}
        {/*    <NavLink href={'/login'} className={style.authText}>Login</NavLink>*/}
        {/*    <NavLink href={'/login'} className={style.authText}>Password</NavLink>*/}
        {/*</div>*/}
        { (isAuth) ? login :
            <Form className="mt-1">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4} className="mt-1">
                        <NavLink href={'/login'} className="p-0">Email</NavLink>
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control type="email" placeholder="Email"
                                      className={style.inputAuth}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={4} className="mt-1">
                        <NavLink href={'/login'} className="p-0">Password</NavLink>
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control type="password" placeholder="Password"
                                      className={style.inputAuth}/>
                    </Col>
                </Form.Group>
            </Form>}

    </div>
}

export default Header