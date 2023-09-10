import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import PromtsCard from "../../components/PromtsCard/PromtsCard";
import {useDispatch, useSelector} from "react-redux";
import {getOneUser} from "../../redux/reducers/user";
import {getAllUserOrders} from "../../redux/reducers/userOrders";

const OneUser = () => {
    const [tab, setTab] = useState("Announcement");

    const dispatch = useDispatch();
    const {user} = useSelector(store => store.oneUser);
    const {userOrders} = useSelector(store => store.userOrders);
    const {id} = useParams();
    const [page, setPage] = useState(1);
    let favoritesPagesCount = new Array(Math.ceil(userOrders.length / 8)).fill(null, 0 );



    useEffect(() => {
        dispatch(getOneUser(id));
        dispatch(getAllUserOrders(id));
    }, []);


    return (
        <section className="user">
            <div className="container">
                <div className="user__profile">
                        <img src={user.image} alt="" className="user__profile-img"/>

                        <div className="user__profile-info">
                            <h2 className="user__profile-name">{user.name}</h2>
                            <p className="user__profile-date">At Promt from {user.createdAt && user.createdAt.slice(0,10)}</p>
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
                        {
                            userOrders.filter((item, idx) => idx >= page * 8 - 8 && idx < page * 8).map((item) => (
                                <PromtsCard item={item}/>
                            ))
                        }
                    </div> :
                        tab === 'Not active' ? '' : ''
                }

                {
                    favoritesPagesCount.length !== 1 && <ul className="favorites__pag">
                        {
                            favoritesPagesCount.map((item, idx) => (
                                <li className={`favorites__pag-item `}
                                    onClick={() => {
                                        // setActive(prev => !prev);
                                        setPage(idx + 1 );
                                    }} key={idx} >{idx + 1}</li>
                            ))
                        }
                    </ul>
                }

            </div>
        </section>
    );
};

export default OneUser;