import React from 'react';
import {Link} from 'react-router-dom'
import {MdFavoriteBorder} from 'react-icons/md'

const PromtsCard = ({item}) => {

    return (
        <Link to={`/declaration/${item._id}`} className="promts__card">
            <img src={item.image && item.image} alt={item.title} className="promts__card-img"/>

            <div className="promts__card-infos">
                <div className="promts__card-info">
                    <h2 className="promts__card-title">{item.title}</h2>
                    <p className="promts__card-price">{item.price} KGZ</p>
                    <p className="promts__card-text">{item.category}</p>
                </div>
                <div className="promts__card-infos__profile">
                    <div className="promts__card-infos__profile-link">
                        <img className="promts__card-infos__profile-link__img" src={item.creatorData && item.creatorData.image} alt={item.creatorData && item.creatorData.name}/>
                        <Link className='promts__card-infos__profile-link__name' to=''>{item.creatorData.name}</Link>
                    </div>
                    <span><MdFavoriteBorder/></span>
                </div>
            </div>

        </Link>
    );
};

export default PromtsCard;