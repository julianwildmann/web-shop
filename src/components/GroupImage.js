import React from 'react';
import Header from "./Header"
import PlaceholderImage from "./PlaceholderImage";
import Description from "./Description";
import QualtricsLink from "./QualtricsLink";

// Storefront Image Eames Chair DSW

class GroupImage extends React.Component {
    render() {
        return (
                <div className="GroupImage">
                    <Header />
                    <PlaceholderImage />
                    <Description />
                    <QualtricsLink />
                </div>
        )
    }
}

export default GroupImage;
