import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';
import './login.css';

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            errorMessage: ''
        }
    }

    static contextType = AppContext;

    handleEmailChange = (e) => {
        const userEmail = e.target.value
        this.setState({
            email: userEmail
        })
    }

    handlePasswordChange = (e) => {
        const userPassword = e.target.value
        this.setState({
            password: userPassword
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.context.users.find(user => user.email === this.state.email)){
            this.setState({
                errorMessage: 'Email or password is incorrect! Please try again.'
            })
            return
        } 

        let registeredUser = this.context.users.find(user => user.email === this.state.email)
        if (registeredUser.password !== this.state.password){
            this.setState({
                errorMessage: 'Email or password is incorrect! Please try again.'
            }) 
            return          
        }
        this.context.updateCurrentUser(registeredUser.userId)
        this.props.history.push('/dashboard')
    }

    render(){
        return(
            <section className="login-form-container">
                <form className="login-form" onSubmit={e => this.handleSubmit(e)}>
                    <h4 className="login-title">Log In</h4>
                    <span className="login-message">New? <Link to="/signup" className="click-here-text">Click here</Link> to Sign Up.</span>
                    <div className="login-form-wrapper">
                        <div className="login-form-input">
                            <input id="username" type="email" required placeholder="Email Address" value={this.state.email} onChange={e => this.handleEmailChange(e)}></input>
                        </div>
                        <div className="login-form-input">
                            <input id="search-video-title" type="password" minLength="8" required placeholder="Password" value={this.state.password} onChange={e => this.handlePasswordChange(e)}></input>
                        </div>
                    </div>
                    <div className="login-form-button">
                        <button>Continue</button>
                        <button type="reset">Reset</button>
                        {this.state.errorMessage ?
                        <div className="error-conatiner">
                            <span className="error-message">{this.state.errorMessage}</span>
                        </div> 
                        : ''
                        }
                    </div>
                </form>
            </section>
        )
    }
}

export default Login;