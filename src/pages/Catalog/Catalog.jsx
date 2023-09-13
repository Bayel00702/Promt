import React from 'react';
import CatalogList from "./CatalogList/Cataloglist";
import CatalogRow from "./CatalogRow/CatalogRow";

const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__row">
                    <CatalogList/>
                    <CatalogRow/>
                </div>

            </div>
        </section>
    );
};

export default Catalog;