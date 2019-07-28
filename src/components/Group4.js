import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import Description from "./Description";
import ARButton from './ARButton';

// AR Button + static information

class Group4 extends React.Component { 
    render() {
        return (
            <div className="Group3">
            <Header />
            <Gallery />
            <ARButton />
            <Description />
            </div>
        )
    }
}

export default Group4;
