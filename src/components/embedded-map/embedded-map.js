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

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
        }
    };

    render(){

        const markers = this.context.destinations.map((destination,i) => 
            <Marker 
                key={i} 
                position={destination.coordinate}
                onClick={this.onMarkerClick}
                name={destination.destination}
                />
            )

        const style = {
            width: '85%',
            height: '500px',
            position: 'relative',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }

        return (
            <div className="embedded-map">
                <Map 
                    google={this.props.google} 
                    zoom={2}
                    style={style}
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
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: config.GooglePlacesAPIKey
})(EmbeddedMap)

