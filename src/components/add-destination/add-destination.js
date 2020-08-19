import React, { Component } from 'react';
import './add-destination.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';
import TokenService from '../../services/token-service';
import actions from '../../actions/actions';
import config from '../../config';

class AddDestination extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: '',
            errorMessage: ''
        }
    }
    
    static contextType = AppContext

    handleChange = (e) => {
        this.setState({
            location: e.target.value,
            coordinates: {},
            imageUrl: ''
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        let newDestination = {
            destination: this.state.location
        }

        fetch(`${config.API_ENDPOINT}/destinations`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newDestination)
        })
        .then(res => {
            if (!res.ok){
                throw new Error(res.statusText)
            }
            return res.json()
        })
        .then(resJson => {
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            this.setState({
                errorMessage: err.message
            })
        })
    }

    //Users can press the esc key to leave this page and go back to homepage
    componentDidMount(){
        document.addEventListener("keydown", (e) => actions.escFunction(e, this.props.history), false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", (e) => actions.escFunction(e, this.props.history), false);
    }


    render(){
        return(
            <section className="add-form-container">
                <form className="add-form" onSubmit={e => this.handleSubmit(e)}>
                    <h4 className="form-title">Add Destination</h4>
                    <span className="sign-up-message">Add a place to your bucket list.</span>
                    <div className="add-form-wrapper">
                        <div className="add-form-input">
                            <input className="location" type="text" required placeholder="Add a location here" onChange={e => this.handleChange(e)}></input>
                        </div>
                    </div>
                    <div className="add-form-button">
                        <button type="submit">Continue</button>
                        <button type="reset">Reset</button>
                        {this.state.errorMessage ?
                            <div className="error-conatiner">
                                <span className="error-message">{this.state.errorMessage} Please try again.</span>
                            </div> 
                            : ''
                        }
                    </div>
                    <div className="action-button">
                        <Link to="/dashboard"><button>Back to Dashboard</button></Link>
                    </div>
                </form>
            </section>
        )
    }
}

export default AddDestination;