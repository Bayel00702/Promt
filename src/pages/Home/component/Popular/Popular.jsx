import React from 'react';
import PopularInfo from "./PopularInfo/Popularinfo";
import PopularDesc from "./PopularInfo/PopularDesc";
import {Link} from "react-router-dom";

const Popular = () => {
    return (
        <section className="popular">
            <div className="container">
                <PopularInfo/>
                <PopularDesc/>
                <Link to='/catalog'  className="promts__btnMarket">
                    Browse Marketplace
                </Link>
            </div>
        </section>
    );
};

export default Popular;