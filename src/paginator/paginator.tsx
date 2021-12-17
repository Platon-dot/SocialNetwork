import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeSelectedPageAC, isFetchingAC, setUsersTC} from "../redux/users-reducer";
import {Button, Col, Container, Row} from "react-bootstrap";
import {RootStateType} from "../redux/redux-store";

const Paginator = () => {

    let totalCount = useSelector<RootStateType, number>((state) => state.usersReducer.totalCount)
    let pageSize = useSelector<RootStateType, number>((state) => state.usersReducer.pageSize)
    let selectedPage = useSelector<RootStateType, number>((state) => state.usersReducer.selectedPage)


    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUsersTC(selectedPage, pageSize))
    }, [])

    const activeSelected = (selectedPage: number) => {
        dispatch(setUsersTC(selectedPage, pageSize))
        dispatch(changeSelectedPageAC(selectedPage))
    }

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [portionNumber, setPortionNumber] = useState(1)
    let leftPage = (portionNumber - 1) * pageSize + 1
    let rightPage = portionNumber * pageSize

    return (
        <Container>
            <Row
                xs='auto'
                className='justify-content-center m-2'>
                <Col> {portionNumber > 1 && <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>back</Button>}
                </Col>
                {pages.filter(el => el >= leftPage && el <= rightPage).map((p, index) => {
                    return (
                        <Col key={index}
                             className={selectedPage === p ?
                                 "bg-secondary text-white m-1" :
                                 "bg-white text-dark m-1"}
                             onClick={() => {
                                 activeSelected(p)
                             }}>{p}
                        </Col>
                    )
                })}
                <Col>
                    {pagesCount > portionNumber &&
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                                setPortionNumber(portionNumber + 1)
                            }}>next</Button>}
                </Col>
            </Row>

        </Container>
    );
};

export default Paginator;