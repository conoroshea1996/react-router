import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@material-ui/core';
import '../Navbar/Navbar.css';

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
                <Container maxWidth='md'>
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right ">
                        <li> <NavLink exact={true} to='/'>Home</NavLink> </li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </Container>
            </div>
        </nav >
    );
}

export default Navbar;