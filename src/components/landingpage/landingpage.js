import React, { Component } from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import './landingpage.css';

class LandingPage extends Component {
    render(){
        return(
            <div className="lp-container">
                <header className="lp-header">
                    <div className="lp-title">
                        <h1>Bucket List Traveler</h1>
                        <h2>Journey begins here</h2>
                        <Link to="/signup"><button className="hero-button">Start Your List</button></Link>
                    </div>
                </header>
                <div className="lp-section-wrapper">
                    <section className="lp-section">
                        <h3>Someday I Will Explore</h3>
                        <p>Trapped at home because of the pandemic? Keep travelling by planning. Write down your next dream destination. Bucket List Traveler is your wishlist.</p>
                    </section>

                    <section className="lp-section">
                        <h3>Someday I Will Do</h3>
                        <p>Create a to-do list for each destination. Freediving Dean's Blue Hole? Visiting The Louvre no less than 3 times? Tasting the original boba in Taiwan? These are your action items.</p>
                    </section>

                    <section className="lp-section">
                        <h3>Map It All</h3>
                        <p>Everytime you created a destination, that destination got a pin dropped onto the map. Eying at the map, you know one day you will clear all those pins.</p>
                    </section>
                </div>
                <div className="action-button">
                    <p>One day you will.</p>
                    <Link to="/signup"><button>Get Started</button></Link>
                </div>
            </div>
        )
    }
}

export default LandingPage;