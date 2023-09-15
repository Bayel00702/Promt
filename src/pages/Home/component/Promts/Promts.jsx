import React, {useEffect} from 'react';
import PromtsCard from "../../../../components/PromtsCard/PromtsCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllOrders} from "../../../../redux/reducers/orders";
import  {Link} from 'react-router-dom'

const Promts = () => {
    const dispatch = useDispatch();
    const {data, filter,search,price} = useSelector(store => store.orders);

    useEffect(() => {
        if (filter) {
            dispatch(getAllOrders({filter,search,price}));
        }
    }, [filter,search,price]);
    return (
        <section className="promts">
            <div className="container">
                <h2 className="promts__title">
                    Declarations Promts
                </h2>

                <div className="promts__row">
                    {
                        data ?
                        data.filter((item,idx) => idx < 6).map((item, idx) => (
                            <PromtsCard item={item} key={item._id || idx}/>
                        ))
                            : <p>error</p>
                    }
                </div>

                <Link to='/catalog'  className="promts__btnMarket">
                    Browse Marketplace
                </Link>
            </div>
        </section>
    );
};

export default Promts;