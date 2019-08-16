import React from 'react';
import Header from "./Header"
import Image from "./Image";
import Description from "./Description";
import ReturnLink from "./ReturnLink";

// Alternative Photo Technology + static information

class GroupImage extends React.Component {
    render() {
        return (
                <div className="GroupImage">
                    <Header />
                    <Image />
                    <Description />
                    <ReturnLink />
                </div>
        )
    }
}

export default GroupImage;
