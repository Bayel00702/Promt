import React from 'react';
import CatalogList from "./CatalogList/Cataloglist";
import CatalogRow from "./CatalogRow/CatalogRow";
import CatalogPaginations from "./CatalogPaginations/CatalogPaginations";

const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__row">
                    <CatalogList/>
                    <CatalogRow/>
                </div>
                <CatalogPaginations/>

            </div>
        </section>
    );
};

export default Catalog;