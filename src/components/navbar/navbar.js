import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import './navbar.css'

class Navbar extends Component {
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
                                <Link className="nav-item" to="/">Log out</Link>
                            </div>
                    }}/>            
                </Switch>
            </nav>

        )
    }
}

export default Navbar;