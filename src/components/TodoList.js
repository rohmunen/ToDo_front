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
                >
                <div style={{borderRadius:15}} className='modal_content'>
                <p style={{alignSelf:'center'}}>Are you sure you want to delete todo?</p>
                    <Button style={{marginLeft:10, marginRight:10}} className='modal_content_button' onClick={() => {console.log(id);todoDelete(id);todoContext.removeTodo(id); setModalActive(!modalActive)}} variant={'outline-danger'}>Delete</Button>
                    <Button style={{marginBottom:10, marginLeft:10, marginRight:10}} className='modal_content_button' onClick={() => setModalActive(!modalActive)} variant={'outline-dark'}>Cancel</Button>
                </div>
            </Modal>
            {todoContext.todos.map(todo =>
                <div key={todo.id} className="todo">
                    <a href={url + todo.id} style={todo.is_done ? {textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.is_favourite ? '⭐':''}{todo.title}</a>
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