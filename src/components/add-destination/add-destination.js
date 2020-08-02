import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './add-destination.css';
import { AppContext } from '../../app-context';
import actions from '../../actions/actions';
import config from '../../config';

class AddDestination extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: '',
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

    /*
    getFromApi = (place) => {
        let polishedPlace = place.toLowerCase().split(' ').join('%20')
        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${polishedPlace}&inputtype=textquery&fields=photos,geometry&key=AIzaSyCFCdVnb7Mb4bT4My2-iU97B1FdVjL6hhw`

        return fetch(url,{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                },
            })
            .then(res => {
                console.log('hello')
                if(!res.ok){
                    console.log('error')
                    throw new Error(res.message)
                }
                return res.json()
            })
            .then(resJson => {
                let locationPhotoReference = resJson.results[0].photos[0].photo_reference
                this.setState({
                    coordinates: resJson.results[0].geometry.location,
                    imageUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1024&photoreference=${locationPhotoReference}&key=AIzaSyCFCdVnb7Mb4bT4My2-iU97B1FdVjL6hhw`
                })
            })
            .then(response => {
                return fetch(this.state.imageUrl)
                    .then(res => {
                        if (!res.ok){
                            throw new Error(res.error)
                        }
                        return res
                    })
                    .then(imageRes => {                                        
                        let locationToAdd = {
                            destination: this.state.location,
                            img: imageRes,
                            coordinate: this.state.coordinates,
                            userId: 1,            
                        }
                        this.context.addDestination(locationToAdd)
                    })
                    .catch(err => {
                        console.error(err.message)
                    })
                })
            .catch(err => {
                console.log(err)
                console.error(err.message)
            })

    }
    */


    getCoordinates = (location) => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${config.GooglePlacesAPIKey}`
        
        return fetch(url)
            .then(res => {
                if(!res.ok){
                    throw new Error(res.error)
                }
                return res.json()
            })
            .then(resJson => {
                let locationCoordinates = resJson.results[0].geometry.location
                let locationToAdd = {
                    destination: this.state.location,
                    img: 'https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    coordinate: locationCoordinates,
                    userId: 1,            
                }
                this.context.addDestination(locationToAdd)
            })
            .catch(err => {
                console.error(err.message)
            })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.getCoordinates(this.state.location)
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
        return(
            <section className="add-form-container">
                <form className="add-form" onSubmit={e => this.handleSubmit(e)}>
                    <h4 className="form-title">Add Destination</h4>
                    <span className="sign-up-message">Add a place to your bucket list.</span>
                    <div className="add-form-wrapper">
                        <div className="add-form-input">
                            <input id="location" type="text" required placeholder="Add a location here" onChange={e => this.handleChange(e)}></input>
                        </div>
                    </div>
                    <div className="add-form-button">
                        <button type="submit">Continue</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default AddDestination;