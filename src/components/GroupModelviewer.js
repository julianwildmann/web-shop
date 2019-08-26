import React from 'react';
import Header from "./Header"
import PlaceholderModelviewer from "./PlaceholderModelviewer";
import Description from "./Description";

// Storefront Image Eames Chair DSW

class GroupModelviewer extends React.Component {
    render() {
        return (
                <div className="GroupModelviewer">
                    <Header />
                    <PlaceholderModelviewer />
                    <Description />
                </div>
        )
    }
}

export default GroupModelviewer;
