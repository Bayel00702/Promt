import React from 'react';
import {AiFillStar} from 'react-icons/ai'

const PopularCard = () => {
    return (
        <div className="popular__card">
            <h2 className="popular__card-title">Retro Neon Signs</h2>
            <p className="popular__card-price">$3.99</p>
            <p className="popular__card-text">Midjourney</p>
            <p className="popular__card-rest"><span><AiFillStar/></span>4.7</p>
        </div>
    );
};

export default PopularCard;