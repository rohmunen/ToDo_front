import React, {useContext} from 'react'
import {Container,Form} from 'react-bootstrap'
import { useState } from 'react'
import Card from "react-bootstrap/Card"
import { Button } from 'react-bootstrap'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { recoverpw } from '../http/userAPI'
import Alert from 'react-bootstrap/Alert'

const RecoverPassword = observer(() => {
    useContext(Context)
    const [email, setEmail] = useState('')
    const [state, setState] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const click = async () => {
        recoverpw(email)
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
                        placeholder="Enter your email"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                        type = 'email'
                    />
                    <Button onClick={click} style={{width:250,alignSelf:'center'}} className="mt-3" variant={"outline-success"}>
                        Submit
                    </Button>
                </Form>
            </Card>   
        </Container>
     );
})
 
export default RecoverPassword;