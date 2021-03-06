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
            currentImageId: 0,
        }
    }

    //choose current hero image in display
    currentSlide = (id) => {
        let i 
        this.setState({
            currentImageId: id
        }, () => {
            let slides = document.getElementsByClassName("mySlides")
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"
            }
            slides[this.state.currentImageId - 1].style.display = "block"
        })
    }


    componentDidMount(){
        //hero image slider, change automatically every 5 sec
        this.timer = setInterval(() => {
            let i 
            let slides = document.getElementsByClassName("mySlides")
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"
            }

            let imageId = this.state.currentImageId % 3
            imageId = imageId + 1
            this.setState({
                currentImageId : imageId
            })
            slides[this.state.currentImageId - 1].style.display = "block"
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render(){
        const heroImgs = imgData.map( (img,i) => <HeroImg key={img.id} id={img.id} name={img.name} src={img.src} />)
        //the dots are displayed on the hero img. number of dots match the number of hero imgs in the slider
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
                    {heroImgs}
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
                    <div><Link to="/signup"><button>Get Started</button></Link></div>
                    <Link style={{color: 'rosybrown', textDecoration: 'underline', marginTop: '20px', display:'block'}} to="/login">Or Try It With Demo Account First</Link>
                    <p>Demo Email: hello@hello.com</p>
                    <p>Demo Password: hellohello</p>
                </div>
            </div>
        )
    }
}

export default LandingPage;
