import React, { Component } from 'react';
//import {Link, Router, Switch} from 'react-router-dom';
import './footer.css';

class Footer extends Component {
    render(){
        return(
            <footer>
                Developed by Daphne Fang
                <div className="contact">
                    <a href="https://github.com/tacoqqq?tab=repositories&q=bucketlist-traveler&type=&language=" target="_blank" rel="noopener noreferrer" alt="github">Repo</a>｜<a href="https://www.linkedin.com/in/daphneysfang" target="_blank" rel="noopener noreferrer" alt="linkedin">Linkedin</a>
                </div>
            </footer>
        )
    }
}

export default Footer;