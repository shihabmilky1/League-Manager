import React from 'react';
import NoMatchGif from '../../../src/Icon/noMatch.gif'
const NoMatch = () => {
    const NoMatch = {
        backgroundColor: '#f7f9fb',
        backgroundImage: `url(${NoMatchGif})`,
        backgroundPosition: 'top',
        backgroundRepeat:'no-repeat',
        height: '90vh'
    }
    return (
            <div style={NoMatch}>

            </div>
        // <div className="container">
        // <div className="row">
        // <div className="col-12">
        //     {/* <img  src={NoMatchGif} alt="Not Found"/> */}
        //  </div>
        //  </div>
        // </div>
    );
};

export default NoMatch;