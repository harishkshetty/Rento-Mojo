import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import LoaderWrapper from '../Components/LoaderWrapper'
import * as axios from '../Service/api';
import './posts.css'

export default class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts:[],
            error:false,
            Loading:true
             
        }
    }
    
    componentDidMount(){
        let id=(this.props.match.params.id)
        axios.getData(`https://jsonplaceholder.typicode.com/posts?userId=${id}&skip=5&limit=5`).then((res)=>{
            this.setState({posts:res.data,Loading:false})
        })
        .catch(error => {
            this.setState({error:true,Loading:false})
        });
        
    }

    handleNavigation=(e)=>{
    const {id}=e.target;
    if(id){
    this.props.history.push(`/postDetail/${id}`);
    }
    }

    render() {
        const {posts,error,Loading}=this.state;
        return (
            <LoaderWrapper isLoading={Loading} isError={error}>
            <div className="user-posts">
                <h3 className="title">Hey These are Your Posts</h3>
            <div className="posts" onClick={this.handleNavigation}>
                {posts.map((post)=><Card key={post.id} id={post.id}>{post.title}</Card>)}
            </div>
            </div>
            </LoaderWrapper>
        )
    }
}
