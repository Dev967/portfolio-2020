import React from "react";

import "../styles/backgrounds.css";
import "../styles/pages/Projects_page.css";
import "../styles/icon.css";
import "../styles/button.css";
import "../styles/icon.css";
import "../styles/media-queries/Projects_page_query.css";

import projects from "../data/projects";
import icon from "../data/iconmap";

import Loader from "react-loader-spinner";

class ProjectsPage extends React.Component {
    state = {
        data: projects,
        loaded: false
    }

    render() {
        const style = this.state.loaded ? {} : { visibility: "hidden" }
        const loader = <Loader
            type="Puff"
            color="black"
            height={100}
            width={100}
            visible={!this.state.loaded}
        />

        return (
            <div className="back1" >
                <div className="loader">
                    {loader}
                </div>
                <div className="projects-page" style={style}>
                    <div className="left3">
                        {this.state.data.map((project, i) => <div key={i} className="panel">
                            <div className="glass inner-block">
                                <h1 className="title2">{project.title}</h1>
                                <div className="stack">
                                    {project.technology.map((e, i) => <img key={i} className="icon2" src={e.path} alt={e.alt} />)}
                                </div>
                                <div className="buttons">
                                    {
                                        project.code !== "" ? (
                                            <button className="btn3 inbtn2" onClick={() => window.open(project.code)}>
                                                See code
                                                <img className="icon3" src={icon.Code.path} alt={icon.Code.alt} />
                                            </button>
                                        ) : null
                                    }
                                    {
                                        project.link !== "" ? (
                                            <button className="btn3 inbtn2" onClick={() => window.open(project.link)}>
                                                Pay a visit
                                                <img className="icon3" src={icon.Web.path} alt={icon.Web.alt} />
                                            </button>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <div className="right3">
                        <img className="hand-img" src="/images/9_Hands_Snow_globe (3).png" alt="test" onLoad={() => { this.setState({ loaded: true }) }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsPage;