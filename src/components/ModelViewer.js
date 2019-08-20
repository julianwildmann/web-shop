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
                            id="reveal" preload camera-controls auto-rotate
                            background-color="#FFFFFF"
                            poster="media/3D-files/DSW_Poster.png"
                            src="media/3D-files/BlenderglTFBright.gltf"
                            alt="DSW 3D Model">
                        </model-viewer>
                    </div>
                    <p id="instruction">Tippe einmal auf den Stuhl und wische dann über das Modell, um es von allen Seiten zu betrachten.</p>
                </div>

                <div className="ReturnLinkProductPage">
                    <a href="https://lmubwl.eu.qualtrics.com/jfe/form/SV_d4HggX2AmuSSay1">Zurück zur Umfrage</a>
                </div>
            </div>
        )
    }
}

export default Modelviewer;
