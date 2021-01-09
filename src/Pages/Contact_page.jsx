import React from "react";

import "../styles/backgrounds.css";
import "../styles/pages/Contact_page.css";
import "../styles/button.css";
import "../styles/icon.css";
import "../styles/media-queries/Contact_page_query.css";

import icon from "../data/iconmap";

import Loader from "react-loader-spinner";

class ContactPage extends React.Component {
    state = {
        loaded: false
    }

    render() {
        const style = this.state.loaded ? {} : { visibility: "hidden" }
        const loader = <Loader
            type="Plane"
            color="black"
            height={100}
            width={100}
            visible={!this.state.loaded}
        />
        return (
            <React.Fragment>
                <div className="back1">
                    <div className="loader">
                        {loader}
                    </div>
                    <div className="contact-page" style={style}>
                        <div className="left4">
                            <img className="hand3" src="/images/29_Hand with phone_02.png" alt="hand with phone" onLoad={() => this.setState({ loaded: true })} />
                        </div>
                        <div className="right4 ">
                            <div className="form glass">
                                <div className="follow-me">
                                    <img className="icon2" onClick={() => window.open(icon.Github.link)} src={icon.Github.path} alt={icon.Github.alt} />
                                    <img className="icon2" onClick={() => window.open(icon.Twitter.link)} src={icon.Twitter.path} alt={icon.Twitter.alt} />
                                    <img className="icon2" onClick={() => window.open(icon.Linkedin.link)} src={icon.Linkedin.path} alt={icon.Linkedin.alt} />
                                    <img className="icon2" onClick={() => window.open(icon.Gmail.link)} src={icon.Gmail.path} alt={icon.Gmail.alt} />
                                </div>
                                <div className="texts-block">
                                    <div className="texts">
                                        <p className="glass2">
                                            if you are an old fashioned guy like me you can call me at, +91 9685275197.
                                    </p>
                                        <p className="glass2">
                                            If you are having troubles getting through Gmail you can use this to mail me, anandparmar967@Gmail.com.
                                    </p>
                                    </div>
                                </div>
                                {/* <form action="#">
                                    <input className="name-in glass2" type="text" placeholder="Name" required />
                                    <textarea className="message-in glass2" placeholder="Message" >
                                        Write your message here!
                                    </textarea>
                                    <input className="send-in btn3" type="submit" value="Send" required />
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactPage;