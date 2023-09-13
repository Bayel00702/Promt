import React, {useEffect, useState} from 'react';
import PromtsCard from "../../../components/PromtsCard/PromtsCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllOrders} from "../../../redux/reducers/orders";

const CatalogRow = () => {

    const dispatch = useDispatch();
    const {data, filter} = useSelector(store => store.orders);
    const [page, setPage] = useState(1);
    const [active, setActive] = useState(false);
    let catalogPagesCount = new Array(Math.ceil(data.length / 6)).fill(null, 0 );


    useEffect(() => {
        if (filter)
            dispatch(getAllOrders(filter));

        if(page > data.length){
            setPage(data.length)
        }


    }, [filter]);


    return (
        <div className="catalog__right">
            <h2 className="catalog__title">
                Trending Prompts
            </h2>
            <div className="catalog__row2">
                {
                    data.filter((item, idx) => idx >= page * 6 - 6 && idx < page * 6).map((item, idx) => (
                        <PromtsCard item={item} key={item._id || idx}/>
                    ))
                }



            </div>
            {
                catalogPagesCount.length !== 1 &&
                <div className="catalog__pagination">
                    <button className="catalog__pagination-btn1"><span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.95 25.9499L13.05 19.05C12.9 18.9 12.794 18.7375 12.732 18.5625C12.67 18.3875 12.6385 18.2 12.6375 18C12.6375 17.8 12.669 17.6125 12.732 17.4375C12.795 17.2625 12.901 17.1 13.05 16.95L19.95 10.05C20.225 9.77495 20.575 9.63745 21 9.63745C21.425 9.63745 21.775 9.77495 22.05 10.05C22.325 10.325 22.4625 10.675 22.4625 11.1C22.4625 11.525 22.325 11.875 22.05 12.15L16.2 18L22.05 23.85C22.325 24.125 22.4625 24.475 22.4625 24.9C22.4625 25.325 22.325 25.6749 22.05 25.9499C21.775 26.2249 21.425 26.3625 21 26.3625C20.575 26.3625 20.225 26.2249 19.95 25.9499Z" fill="white"/>
</svg>
</span></button>
                    {
                        catalogPagesCount.filter((item) =>
                            item !== active
                        ).map((item, idx) => (
                            <button
                                className={`catalog__pagination-btn ${idx + 1 === page ? 'active' : ''}`}
                                onClick={() => {
                                    setActive(prev => !prev);
                                    setPage(idx + 1);
                                }}
                                key={idx}
                            >{idx + 1}</button>

                        ))

                    }
                    <button className="catalog__pagination-btn1"><span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 25.9499L22.95 19.05C23.1 18.9 23.206 18.7375 23.268 18.5625C23.33 18.3875 23.3615 18.2 23.3625 18C23.3625 17.8 23.331 17.6125 23.268 17.4375C23.205 17.2625 23.099 17.1 22.95 16.95L16.05 10.05C15.775 9.77495 15.425 9.63745 15 9.63745C14.575 9.63745 14.225 9.77495 13.95 10.05C13.675 10.325 13.5375 10.675 13.5375 11.1C13.5375 11.525 13.675 11.875 13.95 12.15L19.8 18L13.95 23.85C13.675 24.125 13.5375 24.475 13.5375 24.9C13.5375 25.325 13.675 25.6749 13.95 25.9499C14.225 26.2249 14.575 26.3625 15 26.3625C15.425 26.3625 15.775 26.2249 16.05 25.9499Z" fill="white"/>
</svg>
</span></button>

                </div>
            }
        </div>
    );
};

export default CatalogRow;