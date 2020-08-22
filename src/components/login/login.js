import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';
import TokenService from '../../services/token-service';
import actions from '../../actions/actions';
import config from '../../config';
import './login.css';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            loadingMessage: '',
            errorMessage: ''
        }
    }

    static contextType = AppContext;

    handleEmailChange = (e) => {
        const userEmail = e.target.value
        this.setState({
            email: userEmail,
            isLoading: false,
            loadingMessage: '',
            errorMessage: ''
        })
    }

    handlePasswordChange = (e) => {
        const userPassword = e.target.value
        this.setState({
            password: userPassword,
            isLoading: false,
            loadingMessage: '',
            errorMessage: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            isLoading: true,
            loadingMessage: 'Logging in...'
        })
        const userInfo = {
            email: this.state.email,
            password: this.state.password
        }
        
        fetch(`${config.API_ENDPOINT}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => {
                if (!res.ok){
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(resJson => {
                this.setState({
                    isLoading: false,
                    loadingMessage: ''
                })
                TokenService.saveAuthToken(resJson.authToken)
                this.props.history.push('/dashboard')
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    loadingMessage: '',
                    errorMessage: err.message,
                    loadingMessage: '',
                    errorMessage: err.message
                })
            })
    }

    //Users can press the esc key to leave this page and go back to homepage
    componentDidMount(){
        window.scrollTo(0,0)    
        document.addEventListener("keydown", (e) => actions.escFunction(e, this.props.history), false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", (e) => actions.escFunction(e, this.props.history), false);
    }

    render(){
        return(
            <section className="login-form-container">
                <form className="login-form" onSubmit={e => this.handleSubmit(e)}>
                    <h4 className="login-title">Log In</h4>
                    <span className="login-message">New? <Link to="/signup" className="click-here-text">Click here</Link> to Sign Up.</span>
                    <div className="login-form-wrapper">
                        <div className="login-form-input">
                            <input id="username" type="email" required placeholder="Email Address" onChange={e => this.handleEmailChange(e)}></input>
                        </div>
                        <div className="login-form-input">
                            <input id="search-video-title" type="password" required placeholder="Password" onChange={e => this.handlePasswordChange(e)}></input>
                        </div>
                    </div>
                    <div className="login-form-button">
                        <button>Continue</button>
                        <button type="reset">Reset</button>
                        {this.state.errorMessage ?
                        <div className="error-container">
                            <span className="error-message">{this.state.errorMessage}</span>
                        </div> 
                        : ''
                        }
                        {this.state.loadingMessage ?
                        <div className="error-container">
                            <span className="error-message" style={{color: 'red'}}>{this.state.loadingMessage}</span>
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