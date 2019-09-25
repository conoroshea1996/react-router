import React, { Component } from 'react';
import { Container } from '@material-ui/core';


class Home extends Component {
    render() {
        return (
            <Container style={{ textAlign: 'center' }} maxWidth='md' >
                <h2 >Home</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam voluptates, ducimus sed expedita quidem ea delectus eos dolorum harum dolor fugiat, qui, reiciendis quo accusantium veniam blanditiis magni eligendi.</p>
            </Container >
        );
    }
}

export default Home;