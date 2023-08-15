import React from 'react';
import ReactPlayer from "react-player";

const Earn = () => {
    return (
        <section className="earn">
            <div className="container">
                <div className="earn__row">
                    <ReactPlayer url="https://youtu.be/93vHBgIZlcw"/>

                    <div className="earn__right">
                        <h2 className="earn__right-title">Earn from your Prompt Engineering skills</h2>
                        <p className="earn__right-text">
                            PromptBase is an early marketplace for DALL·E, Midjourney, Stable Diffusion & GPT-3 prompts.
                            <br/>
                            <br/>
                            Sell your prompts on PromptBase and earn from your prompt crafting skills.
                            <br/>
                            <br/>
                            Upload your prompt, connect with Stripe, and become a seller in just 2 minutes.
                        </p>
                        <button className="earn__right-btn">Sell A Prompt</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Earn;