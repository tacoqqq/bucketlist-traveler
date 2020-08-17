import React, { Component } from 'react';
import { Route , Redirect} from 'react-router-dom';
import { AppContext } from '../app-context';
import TokenService from '../services/token-service';

class PrivateRoute extends Component {

    static contextType = AppContext;

   render(){
       let hasToken = TokenService.hasAuthToken()
       return (
            hasToken ? <Route {...this.props} /> : <Redirect to="/login" />
       )
   }
}

export default PrivateRoute;