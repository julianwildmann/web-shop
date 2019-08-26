import React from 'react';
import Header from "./Header"
import PlaceholderContextualImage from "./PlaceholderContextualImage";
import Description from "./Description";

// Storefront Image Eames Chair DSW

class GroupContextualImage extends React.Component {
    render() {
        return (
                <div className="GroupImage">
                    <Header />
                    <PlaceholderContextualImage />
                    <Description />
                </div>
        )
    }
}

export default GroupContextualImage;
