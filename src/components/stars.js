import React from 'react';
import './ratings.css';

const Stars = ({size}) => (
    <div className={size}>
        <input className={size + " star-5"} id="star-5" type="radio" name="star" />
        <label className={size + " star-5"} htmlFor="star-5" />
        <input className={size + " star-4"} id="star-4" type="radio" name="star" />
        <label className={size + " star-4"} htmlFor="star-4" />
        <input className={size + " star-3"} id="star-3" type="radio" name="star" />
        <label className={size + " star-3"} htmlFor="star-3" />
        <input className={size + " star-2"} id="star-2" type="radio" name="star" />
        <label className={size + " star-2"} htmlFor="star-2" />
        <input className={size + " star-1"} id="star-1" type="radio" name="star" />
        <label className={size + " star-1"} htmlFor="star-1" />
    </div>
);

export default Stars;
