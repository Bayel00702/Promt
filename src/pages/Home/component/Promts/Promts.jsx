import React from 'react';
import PromtsCard from "../../../../components/PromtsCard/PromtsCard";

const Promts = () => {
    return (
        <section className="promts">
            <div className="container">
                <div className="promts__btns">
                    <button className="promts__btn">Featured Prompts</button>
                    <button className="promts__btn">Trending Prompts</button>
                    <button className="promts__btn">Newest Prompts</button>
                </div>

                <div className="promts__row">
                    <PromtsCard/>
                    <PromtsCard/>
                    <PromtsCard/>
                </div>

                <button className="promts__btnMarket">
                    Browse Marketplace
                </button>
            </div>
        </section>
    );
};

export default Promts;