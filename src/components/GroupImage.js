import React from 'react';
import Header from "./Header"
import PlaceholderImage from "./PlaceholderImage";
import Description from "./Description";
import ReturnLink from "./ReturnLink";

// Storefront Image Eames Chair DSW

class GroupImage extends React.Component {
    render() {
        return (
                <div className="GroupImage">
                    <Header />
                    <PlaceholderImage />
                    <Description />
                    <ReturnLink />
                </div>
        )
    }
}

export default GroupImage;
