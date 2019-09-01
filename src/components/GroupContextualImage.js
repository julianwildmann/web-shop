import React from 'react';
import Header from "./Header"
import PlaceholderContextualImage from "./PlaceholderContextualImage";
import Description from "./Description";
import QualtricsLink from "./QualtricsLink";

// Storefront Image Eames Chair DSW

class GroupContextualImage extends React.Component {
    render() {
        return (
                <div className="GroupImage">
                    <Header />
                    <PlaceholderContextualImage />
                    <Description />
                    <QualtricsLink />
                </div>
        )
    }
}

export default GroupContextualImage;
