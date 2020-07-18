import React, { Component } from 'react';
import {withRouter} from 'react-router';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
        var id = props.match.params.id;
        this.getDetail(id);
       
    }
    
    getDetail(id){
        fetch("http://127.0.0.1:8000/api/post/"+id)
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
            <div>
                {this.state.posts.map((item)=>
                <div>
                    <h2> Post </h2>
                    <h3>Id: {item.id}</h3>
                    <h3>Title: {item.title}</h3>
                    <h3>Author: {item.author} </h3>
                </div>
                    )}
                
            </div>
        );
    }
}

export default withRouter(Post);