import React from 'react';
import "../style/headerStyle.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="left">
                    <h1><Link className="headerBtn font" to="/">Liga Taxi</Link></h1>
                </div>
                <div className="right">
                    <h1><Link className="headerBtn font" to="/about">About</Link></h1>
                    <h1><Link className="headerBtn font" to="/book">Book Now</Link></h1>
                </div>
            </div>
        </>
    );
};

export default Header;