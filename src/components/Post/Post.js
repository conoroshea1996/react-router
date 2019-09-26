import React, { Component } from 'react';
import axios from "axios";
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class Post extends Component {
    state = {
        post: ''
    }
    componentDidMount() {
        let id = this.props.match.params.post_id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
    }

    render() {
        const { post } = this.state;
        return (
            <Container maxWidth='md'>
                <Card style={{ marginTop: '1rem' }} >
                    <CardContent style={{ textAlign: 'center' }} >
                        <Typography component="h2" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {post.body}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {post.id}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        )
    }
}

export default Post;

