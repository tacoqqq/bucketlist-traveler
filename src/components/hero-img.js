import React from 'react';

function HeroImg(props){
    return(
        <div className="mySlides fade">
            <img src={require('../img/hero' + (props.id + 1) + '.jpeg')} alt="hero banner img"/>
            <div className="text">{props.name}</div>
        </div>
    )
}

export default HeroImg

//<img src={require('../img/hero' + (props.id + 1) + '.jpeg')} alt="hero banner img"/>
//<img src={process.env.PUBLIC_URL + `images/hero${props.id + 1}.jpeg`} alt="hero banner img"/>
