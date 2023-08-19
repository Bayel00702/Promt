import React from 'react';
import DeclarationSwiper from "./DeclarationSwiper/DeclarationSwiper";
import {AiFillPhone} from 'react-icons/ai'

const Declaration = () => {
    return (
        <section className="declaration">
            <div className="container">
                <div className="declaration__row">
                    <div className="declaration__left">
                        <DeclarationSwiper/>

                        <div className="declaration__profile">
                            <div className="declaration__profile-name">
                                <img src="https://img5.lalafo.com/i/avatar/8a/04/27/a51dd3b8641f8aaee0447d3236.jpeg" alt="" className="declaration__profile-name__img"/>
                                <h2 className="declaration__profile-name__title">John</h2>
                            </div>

                            <div className="declaration__profile-contact">
                                <button className="declaration__profile-contact__btn">Write</button>
                                <p className="declaration__profile-contact__text">
                                    <span><AiFillPhone/></span>
                                    +996111111111
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="declaration__right">
                        <h2 className="declaration__right-price">100000$</h2>
                        <div className="declaration__profile-name">
                            <img src="https://img5.lalafo.com/i/avatar/8a/04/27/a51dd3b8641f8aaee0447d3236.jpeg" alt="" className="declaration__profile-name__img"/>
                            <h2 className="declaration__profile-name__title">John</h2>
                        </div>

                        <button className="declaration__right-btn">Все объявление пользователя</button>

                        <p className="declaration__right-phone"><span><AiFillPhone/></span>+996111111111</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Declaration;