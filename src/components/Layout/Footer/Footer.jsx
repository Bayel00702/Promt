import React from 'react';
import Logo2 from '../../../assets/Logo2.png';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook,BsInstagram} from 'react-icons/bs';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <img src={Logo2} alt="" className="footer__img"/>
                    <ul className="footer__list">
                        <li className="footer__item">FAQs</li>
                        <li className="footer__item">Contact</li>
                        <li className="footer__item">Privacy</li>
                    </ul>
                    <span className="footer__icons">
                        <Link className="footer__icons-icon" to=''><BsFacebook/></Link>
                        <Link className="footer__icons-icon" to=''><BsInstagram/></Link>
                        <Link className="footer__icons-icon" to=''><AiOutlineTwitter/></Link>
                    </span>
                </div>
            </div>

            <h2 className="footer__title">© Prompts 2023</h2>
        </footer>
    );
};

export default Footer;