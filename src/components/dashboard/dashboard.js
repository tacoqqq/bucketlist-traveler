import React, { Component } from 'react';
import DestinationList from '../destination-list/destination-list';
import EmbeddedMap from '../embedded-map/embedded-map';
import './dashboard.css';
import { AppContext } from '../../app-context';

class Dashboard extends Component{

    handleClick = (e) => {
        e.preventDefault()
        this.props.history.push('/add-destination')
    }

    static contextType = AppContext;

    render(){
        console.log(this.context)
        console.log(this.context.currentUser.email)
        return(
            <section className="dashboard-container">
                <header className="map-container">
                <h2>Hello, <span className="red">{this.context.currentUser.email}</span></h2>
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