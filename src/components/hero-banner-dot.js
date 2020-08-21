import React from 'react';

function Dot(props){
    return(
        <span className="dot" onClick={() => props.changeBanner(props.id)}></span>
    )
}

export default Dot;