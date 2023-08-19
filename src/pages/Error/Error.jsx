import React from 'react';
import {Link} from 'react-router-dom'
import Logo2 from "../../assets/Logo2.png";

const Error = () => {
    return (
        <div className='error'>
            <img src={Logo2} alt="Logo" className='error__img'/>
            <h2 className='error__title'>404</h2>
            <p className='error__subtitle'>Sorry, we were unable to find that page</p>
            <Link to='/' className='error__link'>Home page</Link>
        </div>
    );
};

export default Error;