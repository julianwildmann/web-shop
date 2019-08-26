import React from 'react';
import Header from "./Header"
import PlaceholderAR from "./PlaceholderAR";
import Description from "./Description";

// Storefront AR Eames Chair DSW

class GroupAR extends React.Component {
    render() {
        return (
                <div className="GroupModelviewer">
                    <Header />
                    <PlaceholderAR />
                    <Description />
                </div>
        )
    }
}

export default GroupAR;
