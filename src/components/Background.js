import React from "react";
import './Background.css';


const Background =(props) => {
    // const classes = 'background' + props.className;

    return (
        <div className='container1 d-flex flex-row'>
            {props.children}
        </div>
    )
}

export default Background;