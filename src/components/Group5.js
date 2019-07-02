import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import Description from "./Description";
import TwoButtons from './TwoButtons';

// Embedded AR viewer + static information

class Group4 extends React.Component { 
    render() {
        return (
            <div className="Group3">
            <Header />
            <Gallery />
            <TwoButtons />
            <Description />
            </div>
        )
    }
}

export default Group4;
