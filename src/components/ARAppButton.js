import React from 'react';

// Button that triggers AR quick look module

class ARAppButton extends React.Component { 
    render() {
        return (
          <div id="ARAppButton">
            <a href="https://apps.8thwall.com/requirements.html">
              <img src="media/ar-button.jpg" alt="AR-Button" width="45%" height="auto" />            
            </a>
          </div>
        )
    }
}

export default ARAppButton;