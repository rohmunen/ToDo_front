import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import Card from "react-bootstrap/Card"
import { Button, NavLink } from 'react-bootstrap'
import {observer} from "mobx-react-lite";
import {todoID, todoPublicCreate, todoUpdate} from "../http/todoAPI"
import Alert from 'react-bootstrap/Alert'





const Todo = observer(() => {
    const {id} = useParams()
    const [link, setLink] = useState('')
    const [state, setState] = useState(false)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    useEffect (() => {
        todoID(id).then(response => {
            console.log('response',response)
            setBody(response.body)
            setTitle(response.title)
        })
    }, [state, link])
    const click = async () => {
        await todoUpdate(id, title, body)
    }
    const click1 = async () => {
        todoPublicCreate(id).then(response => {
            setLink('http://localhost:3000/public/todo/' + response)
        }
        )
        setState(true)
    }
    return(
            <div className = 'todo' style={{justifyContent:"center", alignItems:"center"}}>
            <Card>
                <Alert variant='dark' show={state}>
                <Alert.Link href={link}>A link to public todo</Alert.Link>.
                <Button onClick={() => setState(false)} variant="outline-success">
                    Close me
                </Button>
                </Alert>
                <textarea
                    label='title'
                    value = {title}
                    onChange = {e => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Enter todo body"
                    value = {body}
                    onChange = {e => setBody(e.target.value)}
                />
                <Button onClick={click} style={{width:250,alignSelf:'center'}} className="mt-3" variant={"outline-success"}>
                    Save changes
                </Button>
                <Button onClick={click1} style={{width:250,alignSelf:'center'}} className="mt-3" variant={"outline-success"}>Make public</Button>
            </Card>
    </div>
    )
})

export default Todo

