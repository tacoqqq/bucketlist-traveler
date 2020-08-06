import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './signup.css'
import actions from '../../actions/actions';
import { AppContext } from '../../app-context';

class Signup extends Component {
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

    static contextType = AppContext

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.context.users.find(user => user.email === this.state.email)){
            this.setState({
                errorMessage: 'This email address has already been registered!'
            })
            return
        }

        let newUserInfo = {
            userId: this.context.users.length + 1,
            email: this.state.email,
            password: this.state.password
        }
        this.context.addUser(newUserInfo)
        this.context.updateCurrentUser(newUserInfo.userId)
        this.props.history.push('/dashboard')
    }

    //Users can press the esc key to leave this page and go back to homepage
    componentDidMount(){
        document.addEventListener("keydown", (e) => actions.escFunction(e, this.props.history), false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", (e) => actions.escFunction(e, this.props.history), false);
    }

    render(){
        return (
            <section className="signup-form-container">
                <form className="signup-form" onSubmit={ e => this.handleSubmit(e)}>
                    <h4 className="signup-title">Sign Up</h4>
                    <span className="sign-up-message">Already have an account? <Link to="/login" className="click-here-text">Click here</Link> to Log In.</span>
                    <div className="signup-form-wrapper">
                        <div className="sign-form-input">
                            <input id="username" type="email" required placeholder="Email Address" onChange={e => this.handleEmailChange(e)}></input>
                        </div>
                        <div className="sign-form-input">
                            <input id="search-video-title" type="password" minLength="8" required placeholder="Password" onChange={e => this.handlePasswordChange(e)}></input>
                        </div>
                    </div>
                    <div className="signup-form-button">
                        <button type="submit">Continue</button>
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

export default Signup;