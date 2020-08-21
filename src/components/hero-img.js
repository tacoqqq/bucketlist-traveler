import React from 'react';

function HeroImg(props){
    return(
        <div className="mySlides fade">
            <img src={require('../../public/images/hero' + (props.id + 1) + '.jpeg')} alt="hero banner img"/>
            <div className="text">{props.name}</div>
        </div>
    )
}

export default HeroImg

//<img src={require('../img/hero' + (props.id + 1) + '.jpeg')} alt="hero banner img"/>