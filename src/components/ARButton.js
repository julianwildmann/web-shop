import React from 'react';

// Button that triggers AR quick look module

class ARButton extends React.Component { 
    render() {
        return (
          <div className="Button">
            <a href="media/3D-files/BlenderFinal1.usdz" rel="ar">
              <img src="media/ar-button.jpg" alt="AR-Button" width="45%" height="auto" />            
            </a>
          </div>
        )
    }
}

export default ARButton;