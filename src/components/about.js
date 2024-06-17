import React from 'react';
import "../style/aboutStyle.css";
import car from '../images/car.jfif';

const About = () => {
    return (
        <>
            <div className="centerInfo">
                <h1 className="font">What we offer: </h1>
                <div className="row">
                    <div className="column">
                        <div className="info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor"
                                 className="bi bi-mortarboard" viewBox="0 0 16 16">
                                <path
                                    d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                                <path
                                    d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
                            </svg>
                            <div className="infoText">
                                <h3 className="font">
                                    Liga Taxi: Your Fast and Reliable Taxi Service in Waterford City and County Waterford.
                                </h3>
                            </div>
                        </div>
                        <div className="info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor"
                                 className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path
                                    d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                            <div className="infoText">
                                <h3 className="font">At Liga Taxi, we prioritize reliability, security, and value, ensuring our customers receive the best service possible.
                                    As a family-run business, we take pride in looking after each passenger, making us unique in our commitment to customer care.
                                    Our goal is to consistently deliver a 5-star taxi experience.
                                </h3>
                            </div>
                        </div>
                        <div className="info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor"
                                 className="bi bi-bell" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                            </svg>
                            <div className="infoText">
                                <h3 className="font">Experience the difference with Liga Taxi.
                                    Book your ride today and discover why we're trusted by customers across Waterford for our fast, efficient service.
                                    Your satisfaction is our priority.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <img className="carImg" src={car}/>
                </div>
            </div>
        </>
    );
};

export default About;