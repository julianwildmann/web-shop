import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import Description from "./Description";
import ARAppButton from './ARAppButton';

// Embedded AR viewer + static information

class Group4 extends React.Component { 
    render() {
        return (
            <div className="Group3">
            <Header />
            <Gallery />
            <ARAppButton />
            <Description />
            </div>
        )
    }
}

export default Group4;
