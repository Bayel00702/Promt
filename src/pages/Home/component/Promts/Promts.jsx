import React, {useEffect} from 'react';
import PromtsCard from "../../../../components/PromtsCard/PromtsCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllOrders} from "../../../../redux/reducers/orders";

const Promts = () => {
    const dispatch = useDispatch();
    const {data, filter} = useSelector(store => store.orders);

    useEffect(() => {

            dispatch(getAllOrders())

    }, []);

    return (
        <section className="promts">
            <div className="container">
                <div className="promts__btns">
                    <button className="promts__btn">Featured Prompts</button>
                    <button className="promts__btn">Trending Prompts</button>
                    <button className="promts__btn">Newest Prompts</button>
                </div>

                <div className="promts__row">
                    {
                        data.length ?
                        data.map((item, idx) => (
                            <PromtsCard item={item} key={item._id || idx}/>
                        ))
                            : <p>error</p>
                    }
                </div>

                <button className="promts__btnMarket">
                    Browse Marketplace
                </button>
            </div>
        </section>
    );
};

export default Promts;