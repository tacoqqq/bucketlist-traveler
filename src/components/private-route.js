import React, { Component } from 'react';
import { Route , Redirect} from 'react-router-dom';
import { AppContext } from '../app-context';

class PrivateRoute extends Component {

    static contextType = AppContext;

   render(){
       let isLoggedIn = this.context.currentLoggedIn
       return (
            isLoggedIn ? <Route {...this.props} /> : <Redirect to="/login" />
       )
   }
}

export default PrivateRoute;