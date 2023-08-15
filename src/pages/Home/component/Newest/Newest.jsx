import React from 'react';
import NewestInfo from "./NewestInfo/NewestInfo";

const Newest = () => {
    return (
        <section className="newest">
            <div className="container">
                <NewestInfo/>
                <NewestInfo/>

                <button className="promts__btnMarket">
                    Browse Marketplace
                </button>
            </div>
        </section>
    );
};

export default Newest;