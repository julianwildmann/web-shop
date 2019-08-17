import React from 'react'
import { Link } from "react-router-dom";

// Placeholder Image Eames Chair DSW

class PlaceholderImage extends React.Component {


    render() {
        return (
            <div className="PlaceholderImage">
                    <Link to="m07r92lap2">
                        <img src="/media/Placeholder.png" alt="Produkt ansehen" width="100%" height="auto" />
                    </Link>
          </div>
        )
    }
}

export default PlaceholderImage;
