import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import Description from "./Description";
import ViewerButton from './ViewerButton';
import ReturnLink from "./ReturnLink";

// 3D viewer button + static information

class Group2 extends React.Component {
    render() {
        return (
            <div className="Group2">
                <Header />
                <Gallery />
                <ViewerButton />
                <Description />
                <ReturnLink />
            </div>
        )
    }
}

export default Group2;
