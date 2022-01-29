import React, {ChangeEvent} from "react";
import style from './newProfileMessage.module.css';
import {Button, FormControl, InputGroup} from "react-bootstrap";

type NewMessageType = {
    newPostText: string
    addPost: () => void
    updateNewPostText: (userMessage: string) => void
}

const NewProfileMessage = (props: NewMessageType) => {

    const addPostHandler = () => {
        props.addPost()
        props.updateNewPostText('')
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <>
            <InputGroup className={`mb-1 ${style.inputBox}`}>
                <FormControl
                    placeholder="What's on your mind?"
                    aria-describedby="basic-addon2"
                    className={style.userMessage}
                    onChange={onPostChange}
                    value={props.newPostText}
                />
                <Button
                    variant="outline-secondary"
                    className={style.buttonNewMassage}
                    id="button-addon2"
                    onClick={addPostHandler}>
                    Button
                </Button>
            </InputGroup>
        </>

    )
}


export default NewProfileMessage
