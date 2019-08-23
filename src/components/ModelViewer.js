import React from 'react';
import "./Components.css";

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
                            poster="media/3D-files/DSW_Poster.png"
                            src="media/3D-files/DSW_3D.gltf"
                            alt="DSW 3D Model">
                        </model-viewer>
                    </div>
                    <p id="instruction">Tippen Sie einmal auf den Stuhl und wischen Sie dann über das Modell, um es zu drehen und von allen Seiten zu betrachten.</p>
                </div>

                <div className="ReturnLinkProductPage">
                    <a href="https://lmubwl.eu.qualtrics.com/jfe/form/SV_d4HggX2AmuSSay1">Zurück zur Umfrage</a>
                </div>
            </div>
        )
    }
}

export default Modelviewer;
