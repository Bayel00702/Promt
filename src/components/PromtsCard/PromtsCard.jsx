import React from 'react';
import {Link} from 'react-router-dom'

const PromtsCard = () => {
    return (
        <Link to='/declaration' className="promts__card">
            <h2 className="promts__card-title">Retro Neon Signs</h2>
            <p className="promts__card-price">$3.99</p>
            <p className="promts__card-text">Midjourney</p>
        </Link>
    );
};

export default PromtsCard;