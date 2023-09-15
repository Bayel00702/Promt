import React, {useEffect, useState} from 'react';
import PromtsCard from "../../../../../components/PromtsCard/PromtsCard";
import {useDispatch, useSelector} from "react-redux";
import {getAscCategory} from "../../../../../redux/reducers/asc";
import {getDescCategory} from "../../../../../redux/reducers/desc";

const PopularDesc = () => {

    const dispatch = useDispatch();
    const {desc} = useSelector(store => store.desc);
    const [page, setPage] = useState(1);
    let favoritesPagesCount = new Array(Math.ceil(desc.length / 4)).fill(null, 0 );

    useEffect(() => {
        dispatch(getDescCategory());
        if (page > desc.length) {
            setPage(desc.length);
        }
    }, []);

    console.log(desc)
    return (
        <>
            <div className="popular__top">
                <h2 className="popular__top-title">The cheapest declaration</h2>
            </div>
            <div className="popular__row">
                {
                    desc.filter((item,idx) => idx < 4).map((item) => (
                        <PromtsCard item={item} key={item.id}/>
                    ))
                }
            </div>
        </>
    );
};

export default PopularDesc;