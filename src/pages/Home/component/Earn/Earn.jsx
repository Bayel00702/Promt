import React from 'react';
import ReactPlayer from "react-player";
import { useSelector} from "react-redux";
import {Link} from 'react-router-dom'



const Earn = () => {
    const {user} = useSelector(store => store.oneUser)
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
                        {user === null ? <Link to={'/adddeclaration'} className="free__center-btn">Sell A Prompt</Link> : <Link to={'/register'} className="free__center-btn">Sell A Prompt</Link>}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Earn;