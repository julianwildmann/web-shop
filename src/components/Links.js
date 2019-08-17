import React from 'react';
import { Link } from "react-router-dom";

// Links for reference to experimental groups

class Links extends React.Component {
    render() {
        return (
            <div>
                <p>Mit folgenden Links kann auf die Experimentalgruppen zugegriffen werden:</p>

                <Link to="/m07r92lap1">
                    <li>GroupImage</li>
                </Link>
                <Link to="/b2hmfxezw1">
                    <li>GroupContextualImage</li>
                </Link>
                <Link to="/8xr8d2hho1">
                    <li>GroupModelviewer</li>
                </Link>          
                <Link to="/fdbyy46zp1">
                    <li>GroupAR</li>
                </Link>

                
            </div>

        )
    }
}

export default Links;




