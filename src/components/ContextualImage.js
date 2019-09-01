import React from 'react'
import { Link } from "react-router-dom";

// Image of Eames DSW Chair

class ContextualImage extends React.Component {

    render() {
        return (
            <div>
                <div className="ContextualImage">
                    <img src="media/ContextualImage.jpg" alt="Eames Chair DSW" width="100%" height="auto" />
                </div>
                <div className="LinkContextualImage">
                    <Link to="b2hmfxezw1">Zurück zur Produktseite</Link>
                </div>

            </div>
        )
    }
}

export default ContextualImage;
