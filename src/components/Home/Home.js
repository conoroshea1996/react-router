import React, { Component } from 'react';
import axios from "axios";
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import loader from '../../media/loader.gif'

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data);
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ?
            (posts.map(post => {
                return (
                    <Card style={{ marginTop: '1rem' }} >
                        <CardContent >
                            <Typography component="h2" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {post.body}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })

            ) : (
                <div>
                    <img src={loader} alt='loader'></img>
                </div>
            );
        return (
            <Container style={{ textAlign: 'center' }} maxWidth='md' >
                <h2 >Home</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam voluptates, ducimus sed expedita quidem ea delectus eos dolorum harum dolor fugiat, qui, reiciendis quo accusantium veniam blanditiis magni eligendi.</p>
                {postList}
            </Container >
        );
    }
}

export default Home;