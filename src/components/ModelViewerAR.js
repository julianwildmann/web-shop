import React from 'react';
import "@google/model-viewer";
import "./Components.css";


class ModelViewerAR extends React.Component { 
    render() {
        return (
            <div id="ModelViewerContainer">
                <div>
                    <model-viewer id="ModelViewerAR" preload camera-controls background-color="#FFFFFF"
                        poster="media/3D-files/DSW_Poster.png" src="media/3D-files/DSW.gltf" ios-src="media/3D-files/BlenderFinal1.usdz" alt="DSW 3D Model">
                    </model-viewer>
                </div>
                <p id="instruction">Tippe auf das Symbol rechts, um den Stuhl in deiner Umgebung zu platzieren</p>
            </div>    
        )
    }
}

export default ModelViewerAR;
