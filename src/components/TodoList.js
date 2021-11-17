import { observer } from 'mobx-react-lite'
import React, {useEffect, useContext, useState } from 'react'
import { Button} from 'react-bootstrap'
import {todoDelete, todoDone, todoFavourite, todos} from "../http/todoAPI"
import {Context} from '../index'
import Modal from 'react-modal'


const NewTodoList = observer(({sort}) => {
    const [modalActive, setModalActive] = useState(false)
    const [id, setId] = useState('')
    let url = "http://localhost:3000/todo/"
    const {todoContext} = useContext(Context)
    let dataIsPresent = false
    useEffect (() => {
        todos().then(response => {
            console.log('response', response)
            if (response !== null) {
                console.log('response',response)
                todoContext.addTodos(response)
                todoContext.todoSort(sort)
                dataIsPresent = true
            } else {
                dataIsPresent = false
            }
        })
    }, [sort])
    return (
        <div>
        <Modal 
        className="modal"
        isOpen={modalActive} 
        style={{ content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            ottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            },}} 
        
            >
                <div className='modal-content'>
                <p>Delete todo?</p>
                    <Button onClick={() => {console.log(id);todoDelete(id);todoContext.removeTodo(id); setModalActive(!modalActive)}}>Delete</Button>
                    <Button onClick={() => setModalActive(!modalActive)}>Cancel</Button>
                </div>
        </Modal>
            {todoContext.todos.map(todo =>
                <div key={todo.id} className="todo">
                    <a href={url + todo.id} style={todo.is_done ? {textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.is_favourite ? '🌟':''}{todo.title}</a>
                    <Button style={{marginLeft:10}} onClick = {() => {setId(todo.id); setModalActive(true);console.log(todo.id)}}
                        variant="outline-danger"
                    >✕</Button>
                    <Button onClick ={() => {todoDone(todo.id); todoContext.todoIsDone(todo.id)}}
                        variant="outline-success"
                    >✓</Button>
                    <Button onClick = {() => {todoFavourite(todo.id); todoContext.todoIsFavourite(todo.id)}}
                        variant="outline-warning"
                    >☆</Button>
                </div>
                )}
        </div>
    )
})
 
export default NewTodoList;