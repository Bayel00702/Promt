import React, {useState} from 'react';
import PromtsCard from "../../components/PromtsCard/PromtsCard";

const OneUser = () => {
    const [tab, setTab] = useState("Not active");

    return (
        <section className="user">
            <div className="container">
                <div className="user__profile">
                        <img src="https://img5.lalafo.com/i/avatar/78/b6/0c/435dc351c5794a9310f8ff6283.jpeg" alt="" className="user__profile-img"/>

                        <div className="user__profile-info">
                            <h2 className="user__profile-name">Omurzakov Sanjarbek</h2>
                            <p className="user__profile-date">At Promt from 22.02.20</p>
                        </div>
                    </div>
                <div className="room__top">
                    <div className="room__list">
                        <button className={`room__item ${tab === 'Announcement' ? 'active': ''}`}  onClick={() => setTab('Announcement')}>Announcement</button>
                        <button className={`room__item  ${tab === 'Not active' ? 'active': ''}`}  onClick={() => setTab('Not active')}>Not active</button>
                    </div>
                </div>
                {
                    tab === 'Announcement' ? <div className="user__bottom">
                        <PromtsCard/>
                        <PromtsCard/>
                        <PromtsCard/>
                        <PromtsCard/>
                        <PromtsCard/>
                    </div> : ''

                }

            </div>
        </section>
    );
};

export default OneUser;