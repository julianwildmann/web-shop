import React from 'react';
import Header from "./Header"
import PlaceholderContextualImage from "./PlaceholderContextualImage";
import Description from "./Description";
import ReturnLink from "./ReturnLink";

// Storefront Image Eames Chair DSW

class GroupContextualImage extends React.Component {
    render() {
        return (
                <div className="GroupImage">
                    <Header />
                    <PlaceholderContextualImage />
                    <Description />
                    <ReturnLink />
                </div>
        )
    }
}

export default GroupContextualImage;
