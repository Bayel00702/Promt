import React from 'react';
import Item from '../../../../assets/Picture.png'

const Free = () => {
    return (
        <section className="free">
            <div className="container">
                <div className="free__row">
                    <div className="free__left">
                        <h2 className="free__left-title">Free prompt of the week</h2>
                        <div className="free__left-card">
                            <img src={Item} alt="" className="free__left-card__img"/>
                            <h3 className="free__left-card__title">Kaleidoscope Artistic Tiles</h3>
                            <h2 className="free__left-card__price">$2.99</h2>
                            <button className="free__left-card__btn">Buy Now</button>

                            <ul className="free__left-card__date">
                                <li className="free__left-card__date-time">22<span>Hours</span></li>
                                <li className="free__left-card__date-time">58<span>Min</span></li>
                                <li className="free__left-card__date-time">16<span>Sec</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="free__center">
                        <h2 className="free__center-title">
                            DALL·E, GPT-3, Midjourney, Stable Diffusion, <span>ChatGPT Prompt Marketplace</span>
                        </h2>
                        <p className="free__center-text">Find top prompts, produce better results, save on API costs, sell your own prompts.</p>
                        <div className="free__center-btns">
                            <button className="free__center-btn">Sell A Prompt</button>
                            <button className="free__center-btn">Find a Prompts</button>
                        </div>
                    </div>
                    <div className="free__right">
                        <div className="free__right-left">
                            <div className="free__right-left__card">
                                <h2 className="free__right-left__card-title">Beautiful Photorealistic Portraits</h2>
                                <p className="free__right-left__card-text">DALL-E</p>
                            </div>
                            <div className="free__right-left__card">
                                <h2 className="free__right-left__card-title">Prompts Generators Pro</h2>
                                <p className="free__right-left__card-text">GPT-3</p>
                            </div>
                        </div>
                        <div className="free__right-right">
                            <div className="free__right-left__card">
                                <h2 className="free__right-left__card-title">Pop Retro American Comic Style</h2>
                                <p className="free__right-left__card-text">Midjourney</p>
                            </div>
                            <div className="free__right-left__card">
                                <h2 className="free__right-left__card-title">Beautiful Pixar Girls Cute Avatars</h2>
                                <p className="free__right-left__card-text">Stable Diff.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Free;