import React from "react";

import "../styles/backgrounds.css";
import "../styles/glass.css";
import "../styles/pages/Credits_page.css";
import "../styles/text/text4.css";
import "../styles/media-queries/Credits_page_query.css"

class CreditsPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="back1">
                    <div className="credits-page">
                        <div className="screen6">
                            <div className="one glass2">
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Human character</h1>
                                    <h1 className="text4 black acenter"><a href="https://wannathis.one/humans">wannathis.one</a></h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">3D Hands</h1>
                                    <h1 className="text4 black acenter"><a href="https://icons8.com/l/3d-hands/">Icons8.com</a></h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Background</h1>
                                    <h1 className="text4 black acenter"><a href="https://www.vecteezy.com/free-vector/move">Vecteezy.com</a></h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Express icon</h1>
                                    <h1 className="text4 black acenter"><a href="https://uxwing.com/express-js-icon/">Uxwing.com</a></h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Icons</h1>
                                    <h1 className="text4 black acenter"><a href="https://icons8.com/">Icons8.com</a></h1>
                                </div>
                            </div>

                            <div className="two glass2">
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Carousel</h1>
                                    <h1 className="text4 black acenter"><a href="https://github.com/brainhubeu/react-carousel">brainhubeu</a></h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Floating Button</h1>
                                    <h1 className="text4 black acenter"><a href="https://github.com/ifndefdeadmau5/react-floating-button-menu#readme">ifndefdeadmau5</a></h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Jest Icon</h1>
                                    <h1 className="text4 black acenter"><a href="https://www.iconfinder.com/icons/4691287/jest_icon">IconFinder.com</a></h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Mongoose Icon</h1>
                                    <h1 className="text4 black acenter"><a href="https://www.flaticon.com/download/icon/landing/185753?format=png&size=512">flaticon.com</a></h1>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CreditsPage;