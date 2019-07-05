import React from 'react';
import { Link } from "react-router-dom";

// Button that triggers AR quick look module

class TwoButtons extends React.Component { 
    render() {
        return (
            <div className="TwoButtons" >
                <span className="Button">
                    <a href="https://apps.8thwall.com/ahyiquuj/ARCam2/">
                    <img src="media/ar-button.jpg" alt="AR-Button" width="40%" height="auto"/>            
                    </a>
                </span> 

                <span className="Button">
                    <Link to="2dpighli3d">
                        <img src="media/3D-button.jpg" alt="3D-Button" width="40%" height="auto"/>
                    </Link>
                </span>
            </div>
        )
    }
}

export default TwoButtons;