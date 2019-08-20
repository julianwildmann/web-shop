import React, { Component } from 'react';
import { isMobile } from "react-device-detect";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";


import Links from "./components/Links";


import GroupImage from './components/GroupImage';
import Image from './components/Image'; 
import GroupContextualImage from './components/GroupContextualImage';
import ContextualImage from './components/ContextualImage'; 
import GroupModelviewer from './components/GroupModelviewer';
import Modelviewer from './components/Modelviewer'; 
import GroupAR from './components/GroupAR';
import AR from './components/AR';
 


if (navigator.xr) {
  navigator.xr.requestDevice()
    .then(xrDevice => {
      console.log("this device is WebXR API ready")
    })
    .catch(err => {
      if (err.name === 'NotFoundError') {
        // No XRDevices available.
        console.error('No XR devices available:', err);
      } else {
        // An error occurred while requesting an XRDevice.
        console.error('Requesting XR device failed:', err);
      }
    })
} else {
  console.log("This browser does not support the WebXR API.");
}

class App extends Component {

  render() {
    // Prüfe, ob der User ein kompatibles iOS device verwendet (iPhone, iPad, iPod mit iOS 12 oder höher)
    // if(/(iPhone|iPad|iPod)\sOS\s12/.test(navigator.userAgent)) // if(isMobile)

    return (
      <HashRouter basename="/">
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/m07r92lap1" component={GroupImage} />
            <Route path="/m07r92lap2" component={Image} />
            <Route path="/b2hmfxezw1" component={GroupContextualImage} />            
            <Route path="/b2hmfxezw2" component={ContextualImage} />
            <Route path="/8xr8d2hho1" component={GroupModelviewer} />            
            <Route path="/8xr8d2hho2" component={Modelviewer} />
            <Route path="/fdbyy46zp1" component={GroupAR} />            
            <Route path="/fdbyy46zp2" component={AR} />

            <Route path="/links" component={Links} />
          </Switch>
        </div>
      </HashRouter>
    )

    // Falls ein inkompatibles Gerät verwendet wurde, zeige folgende Fehlermeldung:
    return (
      <div>
        <p>Bitte starte die Umfrage auf einem Smartphone oder Tablet neu: Link.</p>
      </div>
    )
  }
}

export default App;