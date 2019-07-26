import React from 'react';
import "@google/model-viewer";
import "./Components.css";

// Component that integrates 3D Model Viewer

class ModelViewer extends React.Component { 
    render() {
        return (
            <div id="ModelViewer">
                <div>
                    <model-viewer id="ModelViewer" preload camera-controls auto-rotate shadow-intensity="1" background-color="#FFFFFF"
                        poster="media/3D-files/DSW_Poster.png" src="media/3D-files/BlenderglTF.gltf" alt="DSW 3D Model">
                    </model-viewer>
                </div>
                <p id="instruction">Tippe einmal auf den Stuhl und wische dann über das Modell, um es von allen Seiten zu betrachten</p>
            </div>    
        )
    }
}

export default ModelViewer;
