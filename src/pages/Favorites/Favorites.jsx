import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PromtsCard from "../../components/PromtsCard/PromtsCard";

const Favorites = () => {

    const dispatch = useDispatch();
    const {favorites} = useSelector(store => store.oneUser);


    return (
        <section className="favorites">
            <div className="container">
                <div className="favorites__row">
                    {
                        favorites.map((item) => (
                            <PromtsCard item={item}/>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Favorites;