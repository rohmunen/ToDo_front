import { useContext } from "react";
import { Context } from "../index";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavLink } from "react-router-dom";
import { CHANGE_PASSWORD, HOME_ROUTE, LOGIN_ROUTE, RECOVER_PASSWORD, REGISTRATION_ROUTE, TODOS_ROUTE, TODO_ROUTE } from "../utils/consts";
import Button from 'react-bootstrap/Button'
import {observer} from "mobx-react-lite"
import { useHistory } from "react-router-dom";
import { logout } from "../http/userAPI";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    return ( 
        <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color:'white'}} to={HOME_ROUTE}>Todo</NavLink>
        {user.isAuth ?
        <Nav className='ml-auto'>
            <Button style={{marginRight:10}} variant={'outline-light'} onClick={()=>{logout(); history.push(HOME_ROUTE); user.setIsAuth(false)}}>Logout</Button>
            <Button style={{marginRight:10}} variant={'outline-light'} onClick={()=>{history.push(CHANGE_PASSWORD)}}>Change password</Button>
            <Button style={{marginRight:10}} variant={'outline-light'} onClick={() => history.push(TODO_ROUTE)}>Create todo</Button>
            <Button style={{marginRight:10}} variant={'outline-light'} onClick={() => history.push(TODOS_ROUTE)}>Todo list</Button>
        </Nav>
        :
        <Nav className="ml-auto">
            <Button style={{marginRight:10}} variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)}>Login</Button>
            <Button style={{marginRight:10}} className='ml-2' variant={'outline-light'} onClick={() => history.push(REGISTRATION_ROUTE)}>Sign up</Button>
            <Button variant={'outline-light'} onClick={() => history.push(RECOVER_PASSWORD)}>Forgot password</Button>
        </Nav>
        }
        </Container>
      </Navbar>
    );
})
 
export default NavBar;