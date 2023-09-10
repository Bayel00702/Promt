import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAscCategory} from "../../../../../redux/reducers/asc";
import PromtsCard from "../../../../../components/PromtsCard/PromtsCard";

const PopularInfo = () => {

    const dispatch = useDispatch();
    const {asc} = useSelector(store => store.asc);
    const [page, setPage] = useState(1);
    let favoritesPagesCount = new Array(Math.ceil(asc.length / 4)).fill(null, 0 );

    useEffect(() => {
        dispatch(getAscCategory());
        if(page > asc.length){
            setPage(asc.length)
        }
    }, []);

    console.log(asc)


    return (
        <>
            <div className="popular__top">
                <h2 className="popular__top-title">The cheapest goods</h2>
            </div>
            <div className="popular__row">
                {
                    asc.slice((page - 1) * 4, page * 4).map((item) => (
                        <PromtsCard item={item}/>
                    ))
                }
            </div>
        </>
    );
};

export default PopularInfo;