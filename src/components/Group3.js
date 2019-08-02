import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import Description from "./Description";
import ModelViewerAR from './ModelViewerAR';
import ReturnLink from "./ReturnLink";

// Embedded AR viewer + static information

class Group3 extends React.Component {
    render() {
        return (
            <div className="Group3">
                <Header />
                <Gallery />
                <ModelViewerAR />
                <Description />
                <ReturnLink />
            </div>
        )
    }
}

export default Group3;
