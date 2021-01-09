import React from "react";

import "../styles/backgrounds.css";
import "../styles/glass.css";
import "../styles/pages/About_page.css";
import "../styles/text/text3.css";
import "../styles/media-queries/About_page_query.css";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class AboutPage extends React.Component {
    render() {
        const properties = {
            clickToChange: true,
            draggable: true,
            centered: true,
            infinite: true,
            autoPlay: 3000,
            animationSpeed: 800,
            stopAutoPlayOnHover: true
        }

        return (
            <React.Fragment>
                <div className="back1">
                    <div className="about-page">
                        <div className="left5 glass">
                            <div className="quote-screen">
                                <Carousel {...properties}>
                                    <div className="screen1">
                                        <h1 className="text3">What's better than front-end?</h1>
                                        <h1 className="text3 lg">It's Back-end!</h1>
                                    </div>
                                    <div className="screen1">
                                        <h1 className="text3">I turn coffee into </h1>
                                        <h1 className="text3 lg">Code</h1>
                                    </div>
                                    <div className="screen1">
                                        <h1 className="text3 lg">Just Code It</h1>
                                    </div>
                                    <div className="screen1">
                                        <h1 className="text3 lg">!False </h1>
                                        <h1 className="text3">It's funny because it's True</h1>
                                    </div>
                                    <div className="screen1">
                                        <h1 className="text3">Roses are red, </h1>
                                        <h1 className="text3">Violets are blue, </h1>
                                        <h1 className="text3">Unexpected Token on line 32 </h1>
                                    </div>
                                    <div className="screen1">
                                        <h1 className="text3 lg">1 + 1 = 10 </h1>
                                    </div>
                                    <div className="screen1">
                                        <h1 className="text3">There is no place like</h1>
                                        <h1 className="text3 lg">127.0.0.1</h1>
                                    </div>
                                    <div className="screen1">
                                        <h1 className="text3 lg">My code works </h1>
                                        <h1 className="text3">(I have no idea why)</h1>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        <div className="right5">
                            <div className="about-text-block glass2">
                                <p className="text3">
                                    Hello there,
                            </p>
                                <p className="text3 black">
                                    I am anand parmar, second student year at Symbiosis University of Applied Science, Indore.
                            </p>
                                <p className="text3">
                                    I am trying to get an engineering degree in B.tech(CS).
                            </p>
                                <p className="text3 black">
                                    I am a fresher and looking for Internships and part-time jobs at Indore.
                            </p>
                                <p className="text3">
                                    I am very hard working and i have solid knowledge of latest trends and tools in field of computer science.
                            </p>
                                <p className="text3 black">
                                    Hope we can work things out.
                            </p>
                                <p className="text3">
                                    And also, i do freelancing for web projects you can find a way to contact me at contact page.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutPage;