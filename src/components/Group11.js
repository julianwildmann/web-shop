import React from 'react';
import Header from "./Header"
import GalleryExtended from "./GalleryExtended";
import Description from "./Description";

// Alternative Photo Technology including context senstive photos + static information

class Group11 extends React.Component { 
    render() {
        return (
            <div className="Group1">
            <Header />
            <GalleryExtended />
            <Description />
            </div>
        )
    }
}

export default Group11;
