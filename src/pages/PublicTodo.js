import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import Card from "react-bootstrap/Card"
import {todoPublic} from "../http/todoAPI"



const PublicTodo = () => {
    const {link} = useParams()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    useEffect (() => {
        todoPublic(link).then(response => {
            console.log('response',response)
            setBody(response.body)
            setTitle(response.title)
        })
    })
    return(
            <div className = 'todo' style={{justifyContent:"center", alignItems:"center"}}>
            <Card>
                <p>{title}</p>
                <p>{body}</p>
            </Card>
    </div>
    )
}

export default PublicTodo

