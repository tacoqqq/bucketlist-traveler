import React, { Component } from 'react';
import { Switch, Link, Route, withRouter } from 'react-router-dom';
import './navbar.css'
import TokenService from '../../services/token-service';

class Navbar extends Component {

    handleLogOut = (e) => {
        TokenService.clearAuthToken()
        this.props.history.push('/')
    } 

    render(){
        return( 
            <nav>
                <div className="nav-title nav-item"><Link to="/">Home</Link></div>
                <Switch>
                    <Route exact path="/" render={props => { 
                    return  <div className="nav-menu">
                                <Link className="nav-item" to="/login">Log in</Link>
                                <Link className="nav-item" to="/signup">Sign up</Link>
                            </div>
                    }}/>
                    <Route exact path="/signup" render={props => { 
                    return  <div className="nav-menu">
                                <Link className="nav-item" to="/login">Log in</Link>
                                <Link className="nav-item" to="/signup">Sign up</Link>
                            </div>
                    }}/>

                    <Route exact path="/login" render={props => { 
                    return  <div className="nav-menu">
                                <Link className="nav-item" to="/login">Log in</Link>
                                <Link className="nav-item" to="/signup">Sign up</Link>
                            </div>
                    }}/>    
                    
                    <Route exact path="/dashboard" render={props => { 
                    return  <div className="nav-menu">
                                <Link className="nav-item" to="/dashboard">Dashboard</Link>
                                <Link className="nav-item" onClick={e => this.handleLogOut(e)} to="/">Log out</Link>
                            </div>
                    }}/>            
                    <Route exact path="/add-destination" render={props => { 
                    return  <div className="nav-menu">
                                <Link className="nav-item" to="/dashboard">Dashboard</Link>
                                <Link className="nav-item" onClick={e => this.handleLogOut(e)} to="/">Log out</Link>
                            </div>
                    }}/>   
                    <Route exact path="/:destinationId" render={props => { 
                    return  <div className="nav-menu">
                                <Link className="nav-item" to="/dashboard">Dashboard</Link>
                                <Link className="nav-item" onClick={e => this.handleLogOut(e)} to="/">Log out</Link>
                            </div>
                    }}/>   
                    <Route exact path="/destination/:destinationId" render={props => { 
                    return  <div className="nav-menu">
                                <Link className="nav-item" to="/dashboard">Dashboard</Link>
                                <Link className="nav-item" to="/" onClick={e => this.handleLogOut(e)}>Log out</Link>
                            </div>
                    }}/>   
                </Switch>
            </nav>

        )
    }
}

export default withRouter(Navbar);