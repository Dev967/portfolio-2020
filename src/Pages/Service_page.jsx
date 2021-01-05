import React from 'react';

import skills from "../data/services.js";

import "../styles/backgrounds.css";
import "../styles/glass.css";
import "../styles/button.css";
import "../styles/pages/Service_page.css";
import "../styles/text/text2.css";
import "../styles/icon.css";
import "../styles/media-queries/Service_page_query.css";


class ServicePage extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this)
    }
    state = {
        data: skills,
        selected: null,
    }

    select(index) {
        this.setState({ selected: index })
    }

    render_profile() {
        let profile = this.state.data[this.state.selected]
        return (
            <div>
                {profile.featured.length > 0 ? (
                    <div>
                        <h1 className="title1">Featured</h1>
                        <div className="skills glass2">{
                            profile.featured
                                .map(e => <img className="icon2" alt={e.alt} src={e.path} />)}
                        </div>
                    </div>
                ) : <div></div>}

                {profile.testing.length > 0 ? (
                    <div>
                        <h1 className="title1">Testing</h1>
                        <div className="skills glass2">{
                            profile.testing
                                .map(e => <img className="icon2" alt={e.alt} src={e.path} />)}

                        </div>
                    </div>
                ) : <div></div>}

                {profile.others.length > 0 ? (
                    <div>
                        <h1 className="title1">Other</h1>
                        <div className="skills glass2">{
                            profile.others
                                .map(e => <img className="icon2" alt={e.alt} src={e.path} />)}

                        </div>
                    </div>
                ) : <div></div>}

                {profile.certificates.length > 0 ? (
                    <div>
                        <h1 className="title1">Certifications</h1>
                        <div className="skills glass2">{
                            profile.certificates
                                .map(e => <img className="icon2" alt={e.alt} src={e.path} />)}

                        </div>
                    </div>
                ) : <div></div>}
                <div>
                    <h1 className="text2 black">{profile.word}</h1>
                </div>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="back1">
                    <div className="service-page">
                        <div className="left2">
                            {this.state.data.map(element => (
                                <div key={element.index}>
                                    <button onClick={() => this.select(element.index)} className="btn2">
                                        <div className="inbtn2">
                                            {element.title}
                                            {element.icon != null ? <img className="icon1 eicon" alt={element.icon.alt} src={element.icon.path} /> : <div></div>}
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="right2 glass">
                            <div className="screen">
                                {this.state.selected == null ? (
                                    <div>
                                        <h1 className="text21">are you looking for </h1>
                                        <h1 className="text21 lg2 black inline">Front-end</h1>
                                        <h1 className="text21 inline">guy ?</h1>
                                        <h1 className="text21">or maybe a</h1>
                                        <h1 className="text21 lg2 black inline">Back-end</h1>
                                        <h1 className="text21 inline">guy ?</h1>
                                        <h1 className="text21 inline">Well, </h1>
                                        <h1 className="text21 lg2 black inline">I can do both!</h1>
                                    </div>
                                ) : this.render_profile()}
                            </div>
                            <img className="human-char" src="/images/richie_edited.png" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ServicePage;