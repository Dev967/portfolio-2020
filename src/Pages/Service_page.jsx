import React from 'react';

import skills from "../data/services.js";

import "../styles/backgrounds.css";
import "../styles/glass.css";
import "../styles/button.css";
import "../styles/pages/Service_page.css";
import "../styles/text/text2.css";
import "../styles/icon.css";
import "../styles/media-queries/Service_page_query.css";

import Loader from "react-loader-spinner";

class ServicePage extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this)
        // this.state = {
        // data: skills,
        // selected: null,
        //     loaded: false,
        //     mobile: false
        // }
        if (window.screen.width <= 600) {
            this.state = {
                mobile: true, loaded: true, data: skills, selected: null,
            }
        }
        else this.state = {
            mobile: false, loaded: false, data: skills, selected: null,
        }
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
                                .map((e, i) => <img key={i} className="icon2" alt={e.alt} src={e.path} />)}
                        </div>
                    </div>
                ) : <div></div>}

                {profile.testing.length > 0 ? (
                    <div>
                        <h1 className="title1">Testing</h1>
                        <div className="skills glass2">{
                            profile.testing
                                .map((e, i) => <img key={i} className="icon2" alt={e.alt} src={e.path} />)}

                        </div>
                    </div>
                ) : <div></div>}

                {profile.others.length > 0 ? (
                    <div>
                        <h1 className="title1">Other</h1>
                        <div className="skills glass2">{
                            profile.others
                                .map((e, i) => <img key={i} className="icon2" alt={e.alt} src={e.path} />)}

                        </div>
                    </div>
                ) : <div></div>}

                {profile.certificates.length > 0 ? (
                    <div>
                        <h1 className="title1">Certifications</h1>
                        <div className="skills glass2">{
                            profile.certificates
                                .map((e, i) => <img key={i} onClick={() => window.open(e.link)} className="icon2" alt={e.alt} src={e.path} style={{ cursor: "pointer" }} />)}
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
        window.addEventListener("resize", () => console.log("RESIZED"))
        const style = this.state.loaded ? {} : { visibility: "hidden" }
        const loader = <Loader
            type="Puff"
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
                    <div className="service-page" style={style}>
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

                            {this.state.mobile ? null
                                : (
                                    <img className="human-char" alt="human character" src="/images/richie_edited.png" onLoad={() => this.setState({ loaded: true })} />
                                )}
                        </div>

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
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ServicePage;