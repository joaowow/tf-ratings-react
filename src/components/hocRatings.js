import React, { Component } from 'react';
import Ratings from './ratingsWrapper';

let hocRatings = Ratings => class extends Component {
    render() {
        return (
            <div className="reactHOC">
                <Ratings {...this.props}/>
            </div>
        );
    }
};

export default hocRatings(Ratings);
