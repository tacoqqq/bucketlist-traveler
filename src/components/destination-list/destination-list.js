import React, { Component } from 'react';
import { AppContext } from '../../app-context';
import Destination from '../destination/destination';
import './destination-list.css'

class DestinationList extends Component {

    static contextType = AppContext

    render(){
        const destinations = this.context.destinations.map((destination,i) => <Destination 
            image={destination.img}
            destination={destination.destination} 
            key={i}
            />)

        return(
            <div className="destination-list">
                {destinations}
            </div>            
        )
    }
}

export default DestinationList;