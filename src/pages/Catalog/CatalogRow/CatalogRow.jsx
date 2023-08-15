import React from 'react';
import PromtsCard from "../../../components/PromtsCard/PromtsCard";

const CatalogRow = () => {
    return (
            <div className="catalog__right">
                <h2 className="catalog__title">
                    Trending Prompts
                </h2>
                <div className="catalog__row2">
                    <PromtsCard/>
                    <PromtsCard/>
                    <PromtsCard/>
                    <PromtsCard/>
                    <PromtsCard/>
                    <PromtsCard/>
                    <PromtsCard/>
                    <PromtsCard/>
                    <PromtsCard/>
                    <PromtsCard/>
                </div>
            </div>
    );
};

export default CatalogRow;