import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './signup.css'
import actions from '../../actions/actions';

class Signup extends Component {
    constructor(props){
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault()
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