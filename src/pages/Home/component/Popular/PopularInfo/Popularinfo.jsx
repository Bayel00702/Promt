import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAscCategory} from "../../../../../redux/reducers/asc";
import PromtsCard from "../../../../../components/PromtsCard/PromtsCard";
import {getAllOrders} from "../../../../../redux/reducers/orders";

const PopularInfo = () => {

    const dispatch = useDispatch();
    const {asc} = useSelector(store => store.asc);

    const [page, setPage] = useState(1);




    useEffect(() => {
        dispatch(getAscCategory());
        if(page > asc.length){
            setPage(asc.length)
        }
    }, []);

    console.log(asc);


    return (
        <>
            <div className="popular__top">
                <h2 className="popular__top-title">The expensive declaration</h2>
            </div>
            <div className="popular__row">
                {

                    asc.filter((item,idx) => idx < 4).map((item) => (
                        <PromtsCard item={item} key={item._id}/>
                    ))
                }
            </div>
        </>
    );
};

export default PopularInfo;