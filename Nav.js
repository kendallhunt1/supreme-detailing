import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className="mainContent">
            <div className="overlay">
                <div className="title">
                    <h1>Southern Ohio's best detailing service. If you need it done, we can get it done.</h1>
                    <button className="requestEstimateButton">Request Estimate</button>
                </div>
            <nav>
                <div className="logo"></div>
                <div className="navLinks">
                    <span>About</span>
                    <span>Contact</span>
                    <span>Request Estimate</span>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Nav;