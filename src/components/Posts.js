import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Post from './Post';

class Posts extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
        
        this.getData();
       
    }
    
    getData(){
        fetch("http://127.0.0.1:8000/api/post/")
        .then(response => {
                response.json().then((data) =>  {
                    console.log(data);
        this.updateUI(data);
                });
        });
    
        }
    
    updateUI(data){
        this.setState({
            posts:data
        })
    }
render() {
        return (
            <div className='post'>
                <h2>Posts</h2>
                
                {this.state.posts.map(item =>
                        <div>
                            <h3>{item.id}</h3>
                            <h3>{item.title}</h3>
                            <h3>{item.author}</h3>
                            <h3>{item.description}</h3>
                            <Link to ={'/posts/'+item.id}>Detail</Link>
                            <hr />
                        </div>
                        )}
            </div>
        );
    }
}

export default Posts;