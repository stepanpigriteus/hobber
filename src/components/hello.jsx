import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { handleLogout } from '../scripts/scripts.js';
import { PersonCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Switch from './switcher.jsx';

export default function HelloUser() {
    let x = localStorage.getItem('username');
    return ( 
        <Container className='button_container'>
            <Switch/>
            <p className='headerP'>Hello, {x}</p>
            <Button variant="link" className='button_link' id = "logout" onClick={handleLogout}>Logout</Button>
            <Link to = "/cabinet">
                <Button variant="dark"  id = "logout" className='round_button'>
                    <PersonCircle className='round_icon'/>
                </Button>
            </Link>
        </Container>
    );
}