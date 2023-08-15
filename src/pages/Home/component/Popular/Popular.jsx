import React from 'react';
import PopularInfo from "./PopularInfo/Popularinfo";

const Popular = () => {
    return (
        <section className="popular">
            <div className="container">
                <PopularInfo/>
                <PopularInfo/>
                <button className="promts__btnMarket">
                    Browse Marketplace
                </button>
            </div>
        </section>
    );
};

export default Popular;