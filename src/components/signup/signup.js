import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './signup.css'

class Signup extends Component {
    constructor(props){
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello!')
        this.props.history.push('/dashboard')
    }

    render(){
        return (
            <section className="signup-form-container">
                <form className="signup-form" onSubmit={ e => this.handleSubmit(e)}>
                    <h4 className="signup-title">Sign Up</h4>
                    <span className="sign-up-message">Already have an account? <Link to="/login" className="click-here-text">Click here</Link> to Log In.</span>
                    <div className="signup-form-wrapper">
                        <div className="sign-form-input">
                            <input id="username" type="email" required placeholder="Email Address"></input>
                        </div>
                        <div className="sign-form-input">
                            <input id="search-video-title" type="password" minLength="8" required placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="signup-form-button">
                        <button type="submit">Continue</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
          </section>
        )
    }
}

export default Signup;