import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import * as axios from '../Service/api';
import Card from 'react-bootstrap/Card';
import LoaderWrapper from '../Components/LoaderWrapper';
import './postcomment.css'

export default class Postcomment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            postdetail: '',
            postId: '',
            commentList: [],
            show: false,
            error:false,
            Loading:true,
            isDeleting:false
        }
    }

    componentDidMount() {
        let id = (this.props.match.params.id)
        axios.getData(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
            this.setState({
                postdetail: res.data,
                postId: res.data.id,
                userId:res.data.userId,
                Loading:false,
                loadingComment:false
            })
        })
        .catch(error => {
            this.setState({error:true,Loading:false})
        });
    }

    getComments = () => {
        const {
            postId,
            commentList
        } = this.state;
        if (commentList.length === 0) {
            this.setState({loadingComment:true})
            axios.getData(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then((res) => {
                this.setState({
                    commentList: res.data,
                    show: !this.state.show,
                    loadingComment:false                 
                })
            })
            .catch(error => {
                this.setState({error:true})
            });
        } else {
            this.setState({
                show: !this.state.show
            })

        }
    }

    deletePost=()=>{
        const {postId,userId}=this.state;
        this.setState({isDeleting:true},()=>{
            axios.deleteData(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res)=>{
                this.props.history.push(`/post/${userId}`);
            })
            .catch(error => {
                this.setState({error:true,Loading:false});
           });
        })
         

    }
    render() {
        const {postdetail,commentList,show,error,Loading,isDeleting,loadingComment}=this.state;
        return (
            <LoaderWrapper isLoading={Loading} isError={error}>
            <div className="detail-wrapper">
            <Card>
                <h3 className="post-title">{postdetail.title}</h3>
                <h5 className="post-body">{postdetail.body}</h5>
            </Card>
            <div className="post-delete">
            <Button variant="danger"  onClick={this.deletePost}><span className="icon"></span>{isDeleting?"Deleting post...":"Delete"}</Button>
            </div>
            </div>

            <div className="card Comments">
                <div className="comment-title">
                    <h5 className="comment-text">Comments</h5>
                    <Button  onClick={this.getComments} variant="info">{show?' Hide Comments':'Show Comments'}</Button>
                </div>
                {loadingComment?<div>Loading Comments ...</div>:null}
                {show?commentList.map(({id,name,body})=>
                <Card key={id}>
                <h5 className="post-body">{body}</h5>
                <p>{name}</p>
                </Card>):null}

            </div>
            </LoaderWrapper>
        )
    }
}
