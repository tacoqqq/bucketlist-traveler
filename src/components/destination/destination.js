import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './destination.css';
import { AppContext } from '../../app-context';

class Destination extends Component {

    static contextType = AppContext

    render(){
        return (
            <div className="destination">
                <div className="destination-card">
                    <img className="destination-thumbnail-img" src={this.props.image} alt="destination-thumbnail" />
                </div>
                <div><span className="destination-title">{this.props.destination}</span></div>
                <span className="edit-destination"><Link to={`/destination/${this.props.id}`}>Edit Todos</Link></span>
            </div>  
        )
    }
}

export default Destination;