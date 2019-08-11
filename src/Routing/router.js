import React, { Component } from 'react';
import User from '../User/User';
import Post from '../Posts/Post';
import Postcomment from '../PostComment/Postcomment'
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import rento from '../asset/rentos.png';
class router extends Component {
    
    render() {
        return (
            <div>
            <BrowserRouter>
                <a className="nav-link" href="/"><img className="logo"  src={rento} alt="rento-mojo"/></a>
                    <Switch>
                       <Route  path="/user/"  exact component={User}/>
                       <Route  path="/post/:id"  exact component={Post}/>
                       <Route  path="/postDetail/:id"  exact component={Postcomment}/>
                       <Route  exact path="/"  component={User}/>

                    </Switch>
            </BrowserRouter>
                
            </div>
        )
    }
}

export default router;