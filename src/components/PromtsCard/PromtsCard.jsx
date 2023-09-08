import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import {useDispatch, useSelector} from "react-redux";
import {addInFavorites, updateFavorites} from "../../redux/reducers/user.js"

const PromtsCard = ({item}) => {
    const dispatch = useDispatch();
    const {favorites} = useSelector(state => state.oneUser)
    useEffect(()=>{
        dispatch(updateFavorites())
    },[dispatch], favorites?.length)
    return (
        <>
            <div  className="promts__card">
                <Link to={`/declaration/${item._id}`}>
                    <img src={item.image } alt={item.title} className="promts__card-img"/>
                </Link>
                <div className="promts__card-infos">
                    <div className="promts__card-info">
                        <h2 className="promts__card-title">{item.title}</h2>
                        <p className="promts__card-price">{item.price} KGZ</p>
                        <p className="promts__card-text">{item.category}</p>
                    </div>
                    <div className="promts__card-infos__profile">
                        <div className="promts__card-infos__profile-link">
                            <img className="promts__card-infos__profile-link__img" src={item.creatorData && item.creatorData.image} alt={item.creatorData && item.creatorData.name}/>
                            <Link className='promts__card-infos__profile-link__name' to={`/oneuser/${item.creatorData && item.creatorData.id}`}>{item.creatorData.name}</Link>
                        </div>

                        <span className="promts__card-fav" onClick={() => {
                            dispatch(addInFavorites(item));
                        }}>
                            {
                                favorites?.some(i => i._id === item._id) ? <MdFavorite/> : <MdFavoriteBorder/>
                            }
                        </span>
                    </div>
                </div>

            </div>



        </>

    );
};

export default PromtsCard;