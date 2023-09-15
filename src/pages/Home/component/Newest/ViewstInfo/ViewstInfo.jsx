import React, {useEffect} from 'react';
import PromtsCard from "../../../../../components/PromtsCard/PromtsCard";
import {useDispatch, useSelector} from "react-redux";
import {getDescOrders} from "../../../../../redux/reducers/descOrders";

const ViewstInfo = () => {

    const dispatch= useDispatch();
    const {desc} = useSelector(store => store.orderDesc);


    useEffect(() => {
        dispatch(getDescOrders())
    }, []);
    return (
        <>
          <div className="newest__top">
              <h2 className="popular__top-title">Most popular declaration</h2>
          </div>

          <div className="newest__row">
              {
                  desc.filter((item,idx) => idx < 4).map((item) => (
                      <PromtsCard item={item} key={item._id}/>
                  ))
              }
          </div>
        </>
    );
};

export default ViewstInfo;