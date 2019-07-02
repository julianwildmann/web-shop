import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import Description from "./Description";
import ModelViewerAR from './ModelViewerAR';

// Embedded AR viewer + static information

class Group3 extends React.Component { 
    render() {
        return (
            <div className="Group3">
            <Header />
            <Gallery />
            <ModelViewerAR />
            <Description />
            </div>
        )
    }
}

export default Group3;
