import React, { Component } from 'react';
import './ratings.css';

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

        return (
            <div className={classSize}>
                <input className={classSize + " star-5"} id="star-5" type="radio" name="star" />
                <label className={classSize + " star-5"} htmlFor="star-5" />
                <input className={classSize + " star-4"} id="star-4" type="radio" name="star" />
                <label className={classSize + " star-4"} htmlFor="star-4" />
                <input className={classSize + " star-3"} id="star-3" type="radio" name="star" />
                <label className={classSize + " star-3"} htmlFor="star-3" />
                <input className={classSize + " star-2"} id="star-2" type="radio" name="star" />
                <label className={classSize + " star-2"} htmlFor="star-2" />
                <input className={classSize + " star-1"} id="star-1" type="radio" name="star" />
                <label className={classSize + " star-1"} htmlFor="star-1" />
            </div>
        );
    }
}

export default Ratings;
