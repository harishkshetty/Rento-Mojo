import React, { Component } from 'react';
import * as axios from '../Service/api';
import LoaderWrapper from '../Components/LoaderWrapper'
import Tables from '../../src/Components/Table'


class User extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: [],
      error:false,
      Loading:true
    }
  }

  getlist = (id) => {
    this.props.history.push(`/post/${id}`)
    
  }
  
  componentDidMount() {
    axios.getData('https://jsonplaceholder.typicode.com/users').then((res) => {
      this.setState({
        user: res.data,
        Loading:false
      })
    })
    .catch(error => {
      this.setState({error:true,Loading:false})
    });
  }
  render() {
    const {user,error,Loading}=this.state;

    return (
      <LoaderWrapper isLoading={Loading} isError={error}>
      <div className="App">
        <Tables data={user} get={this.getlist}/>
      </div>
      </LoaderWrapper>
    );
  }
}

export default User;
