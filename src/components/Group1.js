import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import Description from "./Description";
import ReturnLink from "./ReturnLink";

// Alternative Photo Technology + static information

class Group1 extends React.Component { 
    render() {
        return (
            <div className="Group1">
                <Header />
                <Gallery />
                <Description />
                <ReturnLink />
            </div>
        )
    }
}

export default Group1;
