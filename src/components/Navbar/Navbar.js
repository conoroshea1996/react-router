import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@material-ui/core';
import '../Navbar/Navbar.css';

class Navbar extends Component {
    state = {
        isToggled: true
    }
    ToggleNav = () => {
        this.setState({ isToggled: !this.state.isToggled })
    }
    render() {
        const { isToggled } = this.state;
        return (
            <nav>
                <div className="nav-wrapper blue darken-1">
                    <Container maxWidth='md'>
                        <div onClick={this.ToggleNav}
                            className=
                            {'toggler navbar_btn ' + (isToggled ? '' : 'change')}
                        >
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                        </div>
                        <a href="#" className="brand-logo">Navbar</a>

                        <ul id="nav-mobile" className="right full-size-nav">
                            <li> <NavLink exact={true} to='/'>Home</NavLink> </li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>

                        <ul className={isToggled ? 'none' : 'small-size-nav'} >
                            <li> <NavLink exact={true} to='/'>Home</NavLink> </li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </Container>
                </div>
            </nav >
        );
    }
}

export default Navbar;