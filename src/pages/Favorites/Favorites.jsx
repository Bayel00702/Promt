import React, {useEffect, useState} from 'react';
import { useSelector} from "react-redux";
import PromtsCard from "../../components/PromtsCard/PromtsCard";

const Favorites = () => {

    const {favorites} = useSelector(store => store.oneUser);
    const [page, setPage] = useState(1);
    const [active, setActive] = useState(false);
    let favoritesPagesCount = new Array(Math.ceil(favorites.length / 4)).fill(null, 0 );



    useEffect(() => {
        if(page > favorites.length){
            setPage(favorites.length)
        }

    }, [favorites]);



    return (
        <section className="favorites">
            <div className="container">
                {favorites.length ?
                    <div className="favorites__row">
                        {
                            favorites.filter((item, idx) => idx >= page * 4 - 4 && idx < page * 4).map((item) => (
                                <PromtsCard item={item}/>
                            ))
                        }

                    </div> : <h3 className='favorites__error'>Favorites clear</h3>}
                    {
                        favoritesPagesCount.length !== 1 && <ul className="favorites__pag">
                            {
                                favoritesPagesCount.filter((item) => item !== active).map((item, idx) => (
                                    <li
                                        className={`favorites__pag-item ${idx + 1 === page ? 'active-button' : ''}`}
                                        onClick={() => {
                                            setActive(prev => !prev);
                                            setPage(idx + 1);
                                        }}
                                        key={idx}
                                    >
                                        {idx + 1}
                                    </li>
                                ))
                            }
                        </ul>
                    }
            </div>
        </section>
    );
};

export default Favorites;