import React from "react";

import "../styles/backgrounds.css"
import "../styles/glass.css"
import "../styles/pages/Credits_page.css"
import "../styles/text/text4.css"

class CreditsPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="back1">
                    <div className="credits-page">
                        <div className="screen6 glass2">
                            <div className="left6">
                                <h1 className="text4 acenter">Icons</h1>
                                <h1 className="text4 acenter">Human character</h1>
                                <h1 className="text4 acenter">3D Hands</h1>
                                <h1 className="text4 acenter">Background</h1>
                                <h1 className="text4 acenter">Express icon</h1>
                                <h1 className="text4 acenter">Hibernate icon</h1>
                                <h1 className="text4 acenter">Jest Icon</h1>
                            </div>
                            <div className="right6">
                                <h1 className="text4 black acenter">Icons 8</h1>
                                <h1 className="text4 black acenter">Guy</h1>
                                <h1 className="text4 black acenter">Icons 8</h1>
                                <h1 className="text4 black acenter">FreePik</h1>
                                <h1 className="text4 black acenter">Guy</h1>
                                <h1 className="text4 black acenter">Guy</h1>
                                <h1 className="text4 black acenter">Guy</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CreditsPage;