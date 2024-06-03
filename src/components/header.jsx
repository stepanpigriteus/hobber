import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap';
import '../custom.css'
import {Box2HeartFill} from 'react-bootstrap-icons'
import HelloUser from './hello';
import ButtonType from './button_type';
import { handleLogout } from '../scripts/scripts';

export default function Header() { 
    return (
        <>
        <Navbar bg='body-tertiary' expand ="md" fixed="top" className='nav_super'>
            <Container className='nav_container'  fluid>
            <Navbar.Brand href="/" className="header_logo">
                <Box2HeartFill size={34} className="header_icon" /> 
                <span > ShareIt </span>
            </Navbar.Brand>
                <Container className='navbar'>
                    <Form className="d-flex search">
                        <Form.Control type="search" placeholder="Search" className="me-2 search_field" aria-label="Search"/>
                        <Button variant="outline-success" className='button' >Search</Button>
                    </Form>
                </Container>
                {localStorage.getItem('jwt_token') ? <HelloUser onClick={handleLogout}/> : <ButtonType />}
            </Container>
        </Navbar>
        </>
    );
}