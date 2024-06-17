import React from 'react';
import "../style/mainStyle.css";
import mainImage from "../images/mainImage.jfif";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <>
        <div className="main" style={{backgroundImage: `url(${mainImage})`}}>
            <div className="overlay"></div>
            <div className="center">
                <div className="bigBox">
                    <h1 className="mainText">Liga Taxi</h1>
                    <h3 className="secondText">Liga taxi is your fast, efficient taxi service,
                        serving customers all around Waterford city and county Waterford.
                        Your friendly driver is just a click of a button away!
                    </h3>
                    <Link to="/book" className="bookBtn">Book Now</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default MainPage;