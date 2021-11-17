import React from 'react'
import {Container,Form} from 'react-bootstrap'
import { useState } from 'react'
import Card from "react-bootstrap/Card"
import { Button } from 'react-bootstrap'
import {observer} from "mobx-react-lite";
import { changepw } from '../http/userAPI'
import Alert from 'react-bootstrap/Alert'

const ChangePassword = observer(() => {
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [state, setState] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const click = async () => {
        if (oldPassword.length > 5 && password.length > 5){
            changepw(localStorage.getItem('id'), oldPassword, password).catch(function(error){
                setState(true)
                setErrorMsg('incorrect old password')
            })
        } else{
            setState(true)
            setErrorMsg('unvalid password must be 6 characters or longer')
        }
    }

    return ( 
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.ineerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5 mt-3">
                <Alert variant='dark' show={state}>
                <p>{errorMsg}</p>
                <Button onClick={() => setState(false)} variant="outline-success">
                    Close me
                </Button>
                </Alert>
                <h2 className="m-auto">Change password</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-2'
                        placeholder="Enter your old password"
                        value = {oldPassword}
                        onChange = {e => setOldPassword(e.target.value)}
                        type = 'password'
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder="Enter your new password"
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                        type = 'password'
                    />
                    <Button onClick={click} style={{width:250,alignSelf:'center'}} className="mt-3" variant={"outline-success"}>
                        Submit
                    </Button>
                </Form>
            </Card>   
        </Container>
     );
})
 
export default ChangePassword;