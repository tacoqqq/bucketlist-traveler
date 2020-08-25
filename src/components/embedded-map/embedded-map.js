import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import './embedded-map.css';
import { AppContext } from '../../app-context';
import config from '../../config';

class EmbeddedMap extends Component {
    constructor(props){
        super(props)
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},            
        }
    }

    static contextType = AppContext

    //when click on ther marker pin, show the name of the destination
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
    //if click on the map, close the opened marker (if there is one)
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
        }
    };

    render(){
        let coordinateObj
        const markers = this.context.destinations.map((destination,i) => {
            coordinateObj = JSON.parse(destination.coordinate)
            return <Marker 
                key={i} 
                position={coordinateObj}
                onClick={this.onMarkerClick}
                name={destination.destination}
                />
            }
            )

        const style = {     
            height: '100%',
            width: '100%',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }

        return (
                <Map 
                    google={this.props.google} 
                    zoom={2}
                    style={style}
                    initialCenter={this.context.destinations.length ? 
                    coordinateObj 
                    : {lat: 40.52, lng: 34.34} }
                >
                    {markers}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: config.GooglePlacesAPIKey
})(EmbeddedMap)
