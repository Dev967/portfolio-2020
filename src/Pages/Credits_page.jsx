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
                                    <h1 className="text4 black acenter">Guy</h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">3D Hands</h1>
                                    <h1 className="text4 black acenter">Icons 8</h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Background</h1>
                                    <h1 className="text4 black acenter">FreePik</h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Express icon</h1>
                                    <h1 className="text4 black acenter">Guy</h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Icons</h1>
                                    <h1 className="text4 black acenter">Icons 8</h1>
                                </div>
                            </div>

                            <div className="two glass2">
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Carousel</h1>
                                    <h1 className="text4 black acenter">Guy</h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Floating Button</h1>
                                    <h1 className="text4 black acenter">Guy</h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Hibernate icon</h1>
                                    <h1 className="text4 black acenter">Guy</h1>
                                </div>
                                <div className="credit-stack">
                                    <h1 className="text4 acenter">Jest Icon</h1>
                                    <h1 className="text4 black acenter">Guy</h1>
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