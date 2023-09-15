import React, {useEffect, useState} from 'react';
import {useParams, Link,useNavigate} from 'react-router-dom'
import DeclarationSwiper from "./DeclarationSwiper/DeclarationSwiper";
import {AiFillPhone} from 'react-icons/ai'
import {useDispatch, useSelector} from "react-redux";
import {getOneOrder} from "../../redux/reducers/product";
import {useIncreaseViewsMutation} from "../../redux/reducers/increaseViews"
import axios from "../../utils/axios";


const Declaration = () => {
    const id = JSON.parse(localStorage.getItem("@@remember-rootState"))?.auth ? JSON.parse(localStorage.getItem("@@remember-rootState"))?.auth?.user?._id : ''
    const token = localStorage.getItem("@@remember-rootState") ? JSON.parse(localStorage.getItem("@@remember-rootState"))?.auth?.token : "";

    const [increaseViews] = useIncreaseViewsMutation();

    const dispatch = useDispatch();
        const {order} = useSelector(store => store.oneOrder);
        const params = useParams();


    useEffect(() => {
        dispatch(getOneOrder(params.id));
        increaseViews({orderId: params.id, userId: id});
    }, []);
    const navigate = useNavigate();

    const delOrder = (data) => {
        axios.delete(`/order/${order._id}`, data,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        }).then(({data}) => {
                console.log(data);
                navigate('/')
            }
        )
    };

    return (
        <section className="declaration">
            <div className="container">
                <div className="declaration__row">
                    <div className="declaration__left">
                        <DeclarationSwiper order={order}/>

                        <div className="declaration__desc">
                            <p className="declaration__desc-text">
                                {order.description}
                            </p>
                        </div>


                        <div className="declaration__profile">
                            <div className="declaration__profile-name">
                                <img src={order.creatorData && order.creatorData.image} alt="" className="declaration__profile-name__img"/>
                                <Link to={`/oneuser/${order.creatorData && order.creatorData.id}`} className="declaration__profile-name__title">{order.creatorData && order.creatorData.name}</Link>
                            </div>

                            <div className="declaration__profile-contact">
                                <button className="declaration__profile-contact__btn">Write</button>
                                <p className="declaration__profile-contact__text">
                                    <span><AiFillPhone/></span>
                                    {order.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="declaration__right">
                        <h2 className="declaration__right-price">Price: <span className="declaration__right-price__span1">{order.price} </span> <span className="declaration__right-price__span">KGZ</span></h2>
                        <h2 className="declaration__right-price">Category: <span className="declaration__right-price__span1">{order.category} </span></h2>
                        <div className="declaration__profile-name">
                            <img  src={order.creatorData && order.creatorData.image}  alt="" className="declaration__profile-name__img"/>
                            <Link to={`/oneuser/${order.creatorData && order.creatorData.id}`} className="declaration__profile-name__title">{order.creatorData && order.creatorData.name}</Link>
                        </div>

                        <Link to={`/oneuser/${order.creatorData && order.creatorData.id}`}>
                            <button className="declaration__right-btn">Все объявление пользователя</button>

                        </Link>

                        <p className="declaration__right-phone"><span><AiFillPhone/></span>{order.phone}</p>
                        <p className="declaration__right-phone">Просмотрено: <span>{order.views}</span></p>
                        {
                            order.creatorData.id === id ? <p style={{background: 'red'}} className="declaration__right-phone"
                            onClick={delOrder}
                            ><span>Удалить заказ </span></p> :  ""
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Declaration;