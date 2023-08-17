import React from 'react';
import Logo from '../../../assets/Logo.png'
import {AiOutlineSearch,AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook,BsInstagram} from 'react-icons/bs';
import {Link} from 'react-router-dom'



const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to="/" className="header__left">
                        <img src={Logo} alt="Logo" className="header__img"/>
                        <span><svg width="109" height="26" viewBox="0 0 109 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.290527 20.1434V0.141907H8.06911C10.0113 0.141907 11.543 0.67528 12.6642 1.74203C13.7854 2.80877 14.346 4.27555 14.346 6.14236C14.346 7.91392 13.7854 9.32355 12.6642 10.3712C11.543 11.3999 10.0113 11.9142 8.06911 11.9142H4.46514V20.1434H0.290527ZM4.46514 8.59968H7.97902C8.75988 8.59968 9.37055 8.3711 9.81104 7.91392C10.2515 7.43769 10.4718 6.82812 10.4718 6.08521C10.4718 5.24705 10.2515 4.59939 9.81104 4.14221C9.37055 3.66598 8.75988 3.42787 7.97902 3.42787H4.46514V8.59968Z" fill="white"/>
<path d="M17.717 20.1434V9.7712L15.9751 7.31387L19.2187 5.28515L20.3599 6.91384C20.4801 7.04719 20.6002 7.12338 20.7203 7.14243C20.8405 7.14243 20.9706 7.07576 21.1108 6.94242C21.6314 6.50429 22.2921 6.12331 23.093 5.79947C23.8939 5.45659 24.8849 5.28515 26.0662 5.28515H26.5468V8.71398C24.7848 8.71398 23.5234 9.00924 22.7626 9.59976C22.0018 10.1712 21.6213 10.9903 21.6213 12.0571V20.1434H17.717Z" fill="white"/>
<path d="M34.7716 20.4863C32.8495 20.4863 31.3378 20.0101 30.2366 19.0576C29.1354 18.0861 28.4847 16.886 28.2845 15.4573C28.1643 14.543 28.1043 13.7048 28.1043 12.9429C28.1043 12.5047 28.1143 12.0857 28.1343 11.6856C28.1744 11.2666 28.2244 10.8189 28.2845 10.3427C28.5047 8.89495 29.1554 7.69486 30.2366 6.7424C31.3378 5.78995 32.8495 5.31372 34.7716 5.31372C36.6938 5.31372 38.2054 5.78995 39.3066 6.7424C40.4279 7.67581 41.0886 8.8759 41.2888 10.3427C41.409 11.2761 41.469 12.1428 41.469 12.9429C41.469 13.7048 41.409 14.543 41.2888 15.4573C41.0686 16.886 40.4079 18.0861 39.3066 19.0576C38.2054 20.0101 36.6938 20.4863 34.7716 20.4863ZM34.7716 17.3146C35.6326 17.3146 36.2833 17.086 36.7238 16.6289C37.1643 16.1526 37.4246 15.5907 37.5047 14.943C37.6048 14.2001 37.6548 13.5239 37.6548 12.9143C37.6548 12.3047 37.6148 11.619 37.5347 10.857C37.4546 10.1903 37.1843 9.62833 36.7238 9.17116C36.2833 8.69493 35.6326 8.45682 34.7716 8.45682C33.9507 8.45682 33.3 8.69493 32.8195 9.17116C32.359 9.62833 32.0987 10.1903 32.0386 10.857C31.9786 11.619 31.9485 12.3047 31.9485 12.9143C31.9485 13.5239 31.9886 14.2001 32.0687 14.943C32.1487 15.5907 32.409 16.1526 32.8495 16.6289C33.31 17.086 33.9507 17.3146 34.7716 17.3146Z" fill="white"/>
<path d="M44.9848 20.1434V5.62803H48.799V6.7424C49.0993 6.39952 49.5899 6.07569 50.2706 5.7709C50.9714 5.44707 51.7623 5.28515 52.6432 5.28515C53.5242 5.28515 54.265 5.39944 54.8657 5.62803C55.4864 5.85662 56.0971 6.22808 56.6977 6.7424C56.9981 6.43762 57.3885 6.18046 57.869 5.97092C58.3495 5.74233 58.8701 5.57089 59.4307 5.45659C59.9914 5.3423 60.5319 5.28515 61.0525 5.28515C62.0737 5.28515 62.9847 5.46612 63.7855 5.82805C64.5864 6.18998 65.2171 6.72335 65.6776 7.42817C66.1582 8.11393 66.3984 8.97114 66.3984 9.99979V20.1434H62.404V10.7427C62.404 10.076 62.2138 9.58071 61.8334 9.25688C61.473 8.91399 60.8823 8.74255 60.0614 8.74255C59.2205 8.74255 58.6098 8.91399 58.2294 9.25688C57.869 9.58071 57.6888 10.076 57.6888 10.7427V20.1434H53.6944V10.7427C53.6944 10.076 53.5042 9.58071 53.1238 9.25688C52.7634 8.91399 52.2028 8.74255 51.4419 8.74255C50.581 8.74255 49.9503 8.91399 49.5498 9.25688C49.1694 9.58071 48.9792 10.076 48.9792 10.7427V20.1434H44.9848Z" fill="white"/>
<path d="M70.4426 25.8581V5.62803H74.437V6.45667C74.7974 6.13283 75.2779 5.86615 75.8786 5.65661C76.4792 5.42802 77.1099 5.31372 77.7707 5.31372C79.5927 5.31372 80.9542 5.7328 81.8552 6.57096C82.7762 7.39007 83.3168 8.55206 83.477 10.0569C83.537 10.5903 83.5771 11.0761 83.5971 11.5142C83.6171 11.9523 83.6271 12.3904 83.6271 12.8286C83.6271 13.2667 83.6071 13.7144 83.5671 14.1715C83.547 14.6097 83.517 15.1145 83.477 15.6859C83.3368 17.1718 82.8263 18.3337 81.9453 19.1719C81.0643 20.0101 79.7529 20.4291 78.0109 20.4291C77.7907 20.4291 77.5905 20.4196 77.4103 20.4006C77.2301 20.3815 77.0499 20.3529 76.8697 20.3148L75.0677 19.2862C74.8675 19.1719 74.7073 19.1433 74.5872 19.2005C74.487 19.2576 74.437 19.3719 74.437 19.5434V25.8581H70.4426ZM76.9898 17.2861C77.8307 17.2861 78.4414 17.0956 78.8218 16.7146C79.2223 16.3145 79.4525 15.8478 79.5126 15.3145C79.5727 14.5144 79.6027 13.7048 79.6027 12.8857C79.6227 12.0666 79.5927 11.257 79.5126 10.457C79.4525 9.92359 79.2223 9.46642 78.8218 9.08543C78.4214 8.68541 77.8107 8.48539 76.9898 8.48539C76.1289 8.48539 75.4882 8.67588 75.0677 9.05686C74.6472 9.43784 74.437 9.95217 74.437 10.5998V15.143C74.437 15.7717 74.6572 16.286 75.0977 16.686C75.5382 17.086 76.1689 17.2861 76.9898 17.2861Z" fill="white"/>
<path d="M91.5458 20.1148C90.5046 20.1148 89.6537 19.8101 88.993 19.2005C88.3323 18.5719 88.0019 17.7718 88.0019 16.8003V8.71398H85.5692V5.62803H87.5514C87.7316 5.62803 87.8717 5.58041 87.9718 5.48517C88.072 5.37087 88.1621 5.13276 88.2421 4.77083C88.3423 4.38984 88.4624 3.79932 88.6025 2.99926L88.7527 2.14206H91.8762V5.62803H94.6693V8.71398H91.8762V16.2288C91.8762 16.4193 91.9262 16.5717 92.0263 16.686C92.1465 16.8003 92.3066 16.8574 92.5069 16.8574H94.8795V20.1148H91.5458Z" fill="white"/>
<path d="M103.083 20.4577C101.942 20.4577 100.941 20.3339 100.08 20.0863C99.2192 19.8196 98.3282 19.4005 97.4072 18.829L98.5484 16.0288C99.1892 16.4098 99.7498 16.6955 100.23 16.886C100.711 17.0765 101.171 17.2099 101.612 17.2861C102.072 17.3432 102.573 17.3718 103.113 17.3718C103.934 17.3718 104.535 17.2194 104.915 16.9146C105.296 16.6098 105.486 16.2288 105.486 15.7717C105.486 15.4097 105.346 15.0954 105.066 14.8287C104.805 14.562 104.385 14.4192 103.804 14.4001L102.152 14.3144C100.771 14.2382 99.6296 13.8763 98.7287 13.2286C97.8477 12.5619 97.4072 11.5142 97.4072 10.0855C97.4072 8.58064 97.9378 7.40912 98.999 6.57096C100.08 5.71375 101.522 5.28515 103.324 5.28515C104.385 5.28515 105.326 5.38992 106.147 5.59946C106.968 5.78995 107.769 6.12331 108.549 6.59953L107.408 9.37117C106.808 9.00924 106.177 8.75208 105.516 8.59968C104.875 8.44729 104.145 8.3711 103.324 8.3711C102.523 8.3711 101.912 8.51396 101.492 8.7997C101.091 9.06639 100.891 9.41879 100.891 9.85692C100.891 10.2189 101.031 10.5046 101.312 10.7141C101.592 10.9237 101.972 11.0475 102.453 11.0856L104.135 11.1713C105.616 11.2475 106.798 11.6475 107.679 12.3714C108.56 13.0953 109 14.1525 109 15.5431C109 17.1241 108.469 18.3433 107.408 19.2005C106.347 20.0386 104.905 20.4577 103.083 20.4577Z" fill="white"/>
</svg>
                    </span>
                    </Link>
                    <div className="header__center">
                        <label htmlFor="" className="header__center-label">
                            <input placeholder="Search Prompts..." type="search" className="header__center-input"/>
                            <span className="header__center-label__icon"><AiOutlineSearch/></span>
                        </label>
                        <ul className="header__list">
                            <li className="header__item"><Link to="/catalog" className="header__item">Marketplace</Link></li>
                            <li className="header__item"><Link to="" className="header__item">Generate</Link></li>
                            <li className="header__item"><Link to="" className="header__item">Hire</Link></li>
                            <li className="header__item"><Link to="/login" className="header__item">Login</Link></li>
                            <li className="header__item"><Link to="" className="header__item">Sell</Link><span><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35355 4.85355C8.54882 4.65829 8.54882 4.34171 8.35355 4.14645L5.17157 0.964467C4.97631 0.769204 4.65973 0.769204 4.46447 0.964466C4.2692 1.15973 4.2692 1.47631 4.46447 1.67157L7.29289 4.5L4.46447 7.32843C4.2692 7.52369 4.2692 7.84027 4.46447 8.03553C4.65973 8.2308 4.97631 8.2308 5.17157 8.03553L8.35355 4.85355ZM-4.37114e-08 5L8 5L8 4L4.37114e-08 4L-4.37114e-08 5Z" fill="white"/>
</svg>
</span></li>
                        </ul>
                    </div>
                    <div className="header__right">
                        <span className="header__right-icons">
                            <Link className="header__right-icons" to=''><BsFacebook/></Link>
                            <Link className="header__right-icons" to=''><BsInstagram/></Link>
                            <Link className="header__right-icons" to=''><AiOutlineTwitter/></Link>
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;