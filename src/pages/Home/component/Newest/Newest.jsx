import React from 'react';
import ViewstInfo from "./ViewstInfo/ViewstInfo";
import NewestInfo from "./NewetInfo/NewetInfo";
import {Link} from "react-router-dom";

const Newest = () => {
    return (
        <section className="newest">
            <div className="container">
                <ViewstInfo/>
                <NewestInfo/>

                <Link to='/catalog'  className="promts__btnMarket">
                    Browse Marketplace
                </Link>
            </div>
        </section>
    );
};

export default Newest;