import React from 'react'
import { Link } from "react-router-dom";

// Image of Eames DSW Chair

class Image extends React.Component {

    render() {
        return (
            <div>
                <div className="ContextualImage">
                    <img src="media/ProductImage2.jpg" alt="Eames Chair DSW" width="100%" height="auto" />
                </div>
                <div className="LinkImage">
                    <Link to="m07r92lap1">Zurück zur Produktseite</Link>
                </div>

            </div>
        )
    }
}

export default Image;