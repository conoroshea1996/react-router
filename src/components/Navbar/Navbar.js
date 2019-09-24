import React from 'react';
import { Container } from '@material-ui/core';

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
                <Container maxWidth='md'>
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right ">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </Container>
            </div>
        </nav>
    );
}

export default Navbar;