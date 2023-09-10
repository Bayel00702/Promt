import React, {useEffect} from 'react';
import PromtsCard from "../../../components/PromtsCard/PromtsCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllOrders} from "../../../redux/reducers/orders";

const CatalogRow = () => {

    const dispatch = useDispatch();
    const {data, filter} = useSelector(store => store.orders);

    useEffect(() => {
        if (filter)
            dispatch(getAllOrders(filter))
    }, [filter]);


    return (
        <div className="catalog__right">
            <h2 className="catalog__title">
                Trending Prompts
            </h2>
            <div className="catalog__row2">
                {
                    data.map((item, idx) => (
                        <PromtsCard item={item} key={item._id || idx}/>
                    ))
                }

            </div>
        </div>
    );
};

export default CatalogRow;