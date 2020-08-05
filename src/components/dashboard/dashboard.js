import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DestinationList from '../destination-list/destination-list';
import EmbeddedMap from '../embedded-map/embedded-map';
import './dashboard.css';

class Dashboard extends Component{
    constructor(props){
        super(props)
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.history.push('/add-destination')

    }
    render(){
        return(
            <section className="dashboard-container">
                <header className="map-container">
                    <EmbeddedMap/>
                </header>
                <div className="dashboard-bottom">
                    <h2>My Bucket List</h2>
                    <DestinationList />
                    <div className="add-button-container">
                        <button onClick={e => this.handleClick(e)}>Add destination</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Dashboard;