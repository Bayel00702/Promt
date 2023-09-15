import React, {useEffect} from 'react';
import PromtsCard from "../../../../../components/PromtsCard/PromtsCard";
import {useDispatch, useSelector} from "react-redux";
import {getNewOrders} from "../../../../../redux/reducers/newOrder";

const NewestInfo = () => {

    const dispatch= useDispatch();
    const {newOrder} = useSelector(store => store.newOrders);


    useEffect(() => {
        dispatch(getNewOrders())
    }, []);
    return (
        <>
            <div className="newest__top">
                <h2 className="popular__top-title">Newest declaration</h2>
            </div>

            <div className="newest__row">
                {
                    newOrder.filter((item,idx) => idx < 4).map((item) => (
                        <PromtsCard item={item}/>
                    ))
                }
            </div>
        </>
    );
};

export default NewestInfo;