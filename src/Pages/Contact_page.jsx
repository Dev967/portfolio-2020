import React from "react";

import "../styles/backgrounds.css";
import "../styles/pages/Contact_page.css";
import "../styles/button.css";
import "../styles/icon.css";
import "../styles/media-queries/Contact_page_query.css";

import icon from "../data/iconmap";

class ContactPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="back1">
                    <div className="contact-page">
                        <div className="left4">
                            <img className="hand3" src="/images/29_Hand with phone_02.png" alt="hand with phone" />
                        </div>
                        <div className="right4 ">
                            <div className="form glass">
                                <div className="follow-me">
                                    <img className="icon2" onClick={() => window.open(icon.Github.link)} src={icon.Github.path} alt={icon.Github.alt} />
                                    <img className="icon2" onClick={() => window.open(icon.Twitter.link)} src={icon.Twitter.path} alt={icon.Twitter.alt} />
                                    <img className="icon2" onClick={() => window.open(icon.Linkedin.link)} src={icon.Linkedin.path} alt={icon.Linkedin.alt} />
                                    <img className="icon2" onClick={() => window.open(icon.Whatsapp.link)} src={icon.Whatsapp.path} alt={icon.Whatsapp.alt} />
                                    <img className="icon2" onClick={() => window.open(icon.Gmail.link)} src={icon.Gmail.path} alt={icon.Gmail.alt} />
                                </div>
                                <form action="#">
                                    <input className="name-in glass2" type="text" placeholder="Name" required />
                                    <textarea className="message-in glass2" placeholder="Message" >
                                        Write your message here!
                                    </textarea>
                                    <input className="send-in btn3" type="submit" value="Send" required />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactPage;