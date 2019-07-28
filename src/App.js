import React, { Component } from 'react';
import { isMobile } from "react-device-detect";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Group1 from "./components/Group1";
import Group11  from "./components/Group11";
import Group2 from "./components/Group2";
import Group21 from "./components/Group21";
import Group3 from "./components/Group3";
import Group4 from "./components/Group4";
import Group5 from "./components/Group5";
import Group31 from "./components/Group31";
import Links from "./components/Links";
import ModelViewer from './components/ModelViewer';
import ModelViewerAR from './components/ModelViewerAR';

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
} else{
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
                <Route path="/z0rxa7k9p1" component={Group1} />
                <Route path="/toswg95b31" component={Group11} />
                <Route path="/gnwsusz0v2" component={Group2} />
                <Route path="/01w5b1lxb2" component={Group21} />
                <Route path="/au8r3nxxb3" component={Group3} />
                <Route path="/t1kl07iwz3" component={Group31} />
                <Route path="/emwmx9nyt4" component={Group4} />
                <Route path="/5r0wqpn8p5" component={Group5} />
                <Route path="/2dpighli3d" component={ModelViewer} />
                <Route path="/ef0kij1par" component={ModelViewerAR} />
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