import React from 'react';
import Item from '../../../../assets/Picture2.png'
import NewestInfo from "../Newest/NewestInfo/NewestInfo";

const Directly = () => {
    return (
        <section className="directly">
            <div className="container">
                <div className="directly__row">
                    <div className="directly__left">
                        <h2 className="earn__right-title">Generate images directly in PromptBase</h2>
                        <p className="earn__right-text">
                            Start prompt engineering instantly within PromptBase using Stable Diffusion.                            <br/>
                            <br/>
                            Craft prompts and sell them on the marketplace.                            <br/>
                            <br/>
                            Get 5 free generation credits every day.                        </p>
                        <button className="earn__right-btn">Sell A Prompt</button>

                    </div>
                    <img src={Item} alt="" className="directly__img"/>
                </div>
                <NewestInfo/>
                <NewestInfo/>
                <button className="promts__btnMarket">
                    Browse Marketplace
                </button>
            </div>
        </section>
    );
};

export default Directly;