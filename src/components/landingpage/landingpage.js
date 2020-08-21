import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { imgData } from '../../img/img-data';
import HeroImg from '../hero-img';
import Dot from '../hero-banner-dot';
import './landingpage.css';

class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state={
            currentImageId: 1
        }
    }

    currentSlide = (id) => {
        this.setState({
            currentImageId: id
        })
    }


    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                currentImageId : this.state.currentImageId % 3 + 1
            })
            this.state.currentImageId = this.state.currentImageId + 1 
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render(){
        const heroImgs = imgData.map( (img,i) => <HeroImg key={img.id} id={img.id} name={img.name} src={img.src}/>)
        const currentImg = heroImgs.filter(img => Number(img.props.id) === Number(this.state.currentImageId))
        const dots = imgData.map( (img,i) => <Dot key={img.id} id={img.id} changeBanner={this.currentSlide}/>)
        return(
            <div className="lp-container">
                {/*Slideshow container*/}
                <div className="slideshow-container">
                    <div className="lp-title">
                        <h1>Bucket List Traveler</h1>
                        <h2>Journey begins here</h2>
                        <Link to="/signup"><button className="hero-button">Start Your List</button></Link>
                    </div>
                    {/*Full-width images with number and caption text*/}  
                    <div className="img-container">
                        {currentImg}
                    </div> 
                    {/*The dots/circles*/}
                    <div className="dot-container">
                        {dots}
                    </div>
                </div>
                <br/>
                <div className="lp-section-wrapper">
                    <section className="lp-section">
                        <h3><div className="overlay"></div><span className="section-title">Someday I Will Explore</span></h3>
                        <p>Trapped at home because of the pandemic? Keep travelling by planning. Write down your next dream destination. Bucket List Traveler is your wishlist.</p>
                    </section>

                    <section className="lp-section">
                        <h3><div className="overlay"></div><span className="section-title">Someday I Will Do</span></h3>
                        <p>Create a to-do list for each destination. Freediving Dean's Blue Hole? Visiting The Louvre no less than 3 times? Tasting the original boba in Taiwan? These are your action items.</p>
                    </section>

                    <section className="lp-section">
                        <h3><div className="overlay"></div><span className="section-title">Map It All</span></h3>
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

/*
                <header className="lp-header">
                    <div className="lp-title">
                        <h1>Bucket List Traveler</h1>
                        <h2>Journey begins here</h2>
                        <Link to="/signup"><button className="hero-button">Start Your List</button></Link>
                    </div>
                </header>
*/