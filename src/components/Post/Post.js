import React, { Component } from 'react';
import { Container } from '@material-ui/core';

class Post extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id
        this.setState({
            id
        })
    }

    render() {
        console.log(this.state);
        return (<Container maxWidth='md'>
            <h4>route parm</h4>
        </Container>
        )
    }
}

export default Post;

