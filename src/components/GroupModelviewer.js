import React from 'react';
import Header from "./Header"
import PlaceholderModelviewer from "./PlaceholderModelviewer";
import Description from "./Description";
import QualtricsLink from "./QualtricsLink";

// Storefront Image Eames Chair DSW

class GroupModelviewer extends React.Component {
    render() {
        return (
                <div className="GroupModelviewer">
                    <Header />
                    <PlaceholderModelviewer />
                    <Description />
                    <QualtricsLink />
                </div>
        )
    }
}

export default GroupModelviewer;
