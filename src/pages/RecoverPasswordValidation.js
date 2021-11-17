import React from 'react'
import {Container,Form} from 'react-bootstrap'
import { useState } from 'react'
import Card from "react-bootstrap/Card"
import { Button } from 'react-bootstrap'
import {observer} from "mobx-react-lite";
import { validaterecoverpw } from '../http/userAPI'
import { useParams } from 'react-router'

const RecoverPasswordValidation = observer(() => {
    const {id} = useParams()
    const {evpw} = useParams()
    const [password, setPassword] = useState('')
    const click = async () => {
        validaterecoverpw(password, id, evpw)
    }
    return ( 
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.ineerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5 mt-3">
                <h2 className="m-auto">Change password</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-2'
                        placeholder="Enter your password"
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
 
export default RecoverPasswordValidation;