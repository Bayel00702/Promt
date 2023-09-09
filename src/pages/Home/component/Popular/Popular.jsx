import React from 'react';
import PopularInfo from "./PopularInfo/Popularinfo";
import PopularDesc from "./PopularInfo/PopularDesc";

const Popular = () => {
    return (
        <section className="popular">
            <div className="container">
                <PopularInfo/>
                <PopularDesc/>
                <button className="promts__btnMarket">
                    Browse Marketplace
                </button>
            </div>
        </section>
    );
};

export default Popular;