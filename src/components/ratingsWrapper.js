import React, { Component } from 'react';
import Stars from './stars';

class Ratings extends Component {
    render() {
        let classSize = "stars_";
        switch (this.props.size) {
            case 'small':
            case 's':
                classSize += "small";
                break;
            case 'medium':
            case 'm':
                classSize += "medium";
                break;
            case 'large':
            case 'l':
                classSize += "large";
                break;
            default:
                console.log('Size variable = ' + this.props.size + ' is not an acceptable value. Defaulting to large.');
                classSize = "stars_large";
        }

        return ( <Stars size={classSize} /> );
    }
}

export default Ratings;
