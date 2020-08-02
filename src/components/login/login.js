import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

class Login extends Component {
    render(){
        return(
            <section className="login-form-container">
                <form className="login-form">
                    <h4 className="login-title">Log In</h4>
                    <span className="login-message">New? <Link to="/signup" className="click-here-text">Click here</Link> to Sign Up.</span>
                    <div className="login-form-wrapper">
                        <div className="login-form-input">
                            <input id="username" type="email" required placeholder="Email Address"></input>
                        </div>
                        <div className="login-form-input">
                            <input id="search-video-title" type="password" minLength="8" required placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="login-form-button">
                        <button>Continue</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Login;