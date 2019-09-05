import React from 'react';
import "./Components.css";
import { Link } from "react-router-dom";

// 3D Model of Eames DSW Chair

class Modelviewer extends React.Component {

    render() {
        return (
            <div>
                <div id="ModelViewerContainer">
                    <div>
                        <model-viewer
                            id="reveal" preload camera-controls
                            background-color="#FFFFFF"
                            poster="media/3D-files/DSW_Poster_load.png"
                            src="media/3D-files/DSW_3D.gltf"
                            alt="DSW 3D Model">
                        </model-viewer>
                    </div>
                    <p id="instruction">Tippen Sie einmal auf den Stuhl und wischen Sie dann über das Modell, um es zu drehen und von allen Seiten zu betrachten.</p>
                </div>

                <div className="LinkModelViewer">
                    <Link to="8xr8d2hho1">Zurück zur Produktseite</Link>
                </div>
            </div>
        )
    }
}

export default Modelviewer;
