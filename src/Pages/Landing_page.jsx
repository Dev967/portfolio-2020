import React from 'react';

import "../styles/backgrounds.css";
import "../styles/pages/Landing_page.css";
import "../styles/glass.css";
import "../styles/text/text1.css";
import "../styles/button.css";
import "../styles/media-queries/Landing_page_query.css";

import { NavLink } from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="back1">
                    <div className="glass main-container">
                        <div className="text-block left">
                            <h3 className="text1 inline">It's  </h3>
                            <h1 className="text1 lg inline">2021</h1>
                            <h3 className="text1 inline">and i'm </h3>
                            <h1 className="text1 lg inline">ready to work.</h1>
                            <div className="two">
                                <h1 className="text1 inline">Are you ready to</h1>
                                <h1 className="text1 lg inline"> hire</h1>
                                <h1 className="text1 lg inline">?</h1>
                            </div>
                            <div className="three">
                                <button className="btn1 glass"><NavLink className="navlink" to="/contact">Contact</NavLink></button>
                                <button className="btn1 glass"><NavLink className="navlink" to="/services">See more</NavLink></button>
                            </div>
                        </div>
                        <div className="text-block right">
                            <div >
                                <h1 className="heading1 inline xxl black">2</h1>
                                <h1 className="heading1 inline xxl">0</h1>
                            </div>
                            <div>
                                <h1 className="heading1 inline xxl black">2</h1>
                                <h1 className="heading1 inline xxl number-one">1</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LandingPage;
