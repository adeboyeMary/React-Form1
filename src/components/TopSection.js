import React from "react";
import './TopSection.css';
import Form from "./Form";

const TopSection = () => {
    return (
        <div className="container2 d-flex flex-column">
            <div className="top-container">
                <span  className="text-white">Try it free 7days </span> 
                then $20/mo. thereafter
            </div>
            <Form />
        </div>
    )
}

export default TopSection;