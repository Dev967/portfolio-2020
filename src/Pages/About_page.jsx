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
                                        <h1 className="text3 lg">It's Backe-end!</h1>
                                    </div>
                                    <div className="screen1">
                                        <h1 className="text3">Finally!</h1>
                                        <h1 className="text3 lg">It's working!</h1>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        <div className="right5">
                            <p className="text3">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus perspiciatis quam nesciunt sequi, labore mollitia repellendus, error molestiae at nisi alias aperiam assumenda accusantium accusamus id adipisci incidunt minus totam.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutPage;