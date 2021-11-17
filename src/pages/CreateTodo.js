import React from 'react'
import {Container,Form} from 'react-bootstrap'
import { useState } from 'react'
import Card from "react-bootstrap/Card"
import { Button } from 'react-bootstrap'
import {observer} from "mobx-react-lite";
import {todo} from "../http/todoAPI"

const CreateTodo = observer(() => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const click = async () => {
        todo(title, body)
    }

    return ( 
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.ineerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5 mt-3">
                <h2 className="m-auto">Todo</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-2'
                        placeholder="Enter todo title"
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}
                    />
                    <textarea
                        className='mt-2'
                        placeholder="Enter todo body"
                        value = {body}
                        onChange = {e => setBody(e.target.value)}
                    />
                    <Button onClick={click} style={{width:250,alignSelf:'center'}} className="mt-3" variant={"outline-success"}>
                        Submit
                    </Button>
                </Form>
            </Card>   
        </Container>
     );
})

export default CreateTodo;