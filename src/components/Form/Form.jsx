import React, {useState} from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {AiFillCamera} from 'react-icons/ai'
import InputMask from 'react-input-mask';
import {useDispatch, useSelector} from "react-redux";
import {authUser} from '../../redux/reducers/auth';
import axios from "../../utils/axios";
import {toast} from "react-toastify";


const Form = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [passwordView, setPasswordView] = useState(false);


    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm({
        mode: "onBlur"
    });

    const handleRegister = (data) => {
        axios.post('/register', {...data, image: getImageUrl})
            .then(res =>
            {
                dispatch(authUser(res.data));
                navigate('/');
                console.log(data)
            })
            .catch((err) =>  console.log(err));
    };

    const loginUser = (data) => {
        axios.post('/login', data)
            .then(res =>
            {
                dispatch(authUser(res.data));
                navigate('/');
                console.log(data)
            })
            .catch((err) =>  console.log(err));
    };

    const submitForm = (data) => {
        let {...user} = data;

        if (location.pathname === '/login'){
            loginUser(user)
        } else {
            handleRegister(user)
        }
    };

    const [image, setImage] = useState([]);
    const [getImageUrl, setGetImageUrl] = useState("");

    const [selecttedImage, setSeltectedImage] = useState(null);
    const handleImageChanges = (event) => {
        setSeltectedImage(event.target.files[0]);
        console.log(event.target.files[0])
    };

    const addImage = async (file) => {
        let formData = new FormData();
        formData.append('file', file);
        await axios.post('/upload', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
            .then(res => {
                setGetImageUrl(res.data.url)
            })
            .catch(err => console.log(err)

            )
    };

    return (
        <div className="login">

            {
                location.pathname === '/login' ?
                    <h2 className="login__title">
                        Sign In
                    </h2> :
                    <h2 className="login__title">
                        Sign Up
                    </h2>
            }
            <div className="login__block">

                {
                    location.pathname === '/login' ?
                        <div className="login__block-btns">
                            <Link className="login__block-link" to='/login'>
                                <button className="login__block-btn login__block-btn2 active">Sign in</button>
                            </Link>
                        <Link className="login__block-link" to='/register'>
                            <button className="login__block-btn login__block-btn3">Register</button>
                        </Link>
                        </div>
                        :
                        <div className="login__block-btns">
                            <Link className="login__block-link" to='/login'>
                                <button className="login__block-btn login__block-btn2 ">Sign in</button>
                            </Link>
                            <Link className="login__block-link" to='/register'>
                                <button className="login__block-btn login__block-btn3 active">Register</button>
                            </Link>
                        </div>
                }


                <form onSubmit={handleSubmit(submitForm)} className="login__form">

                    <label htmlFor="" className="login__form-label">
                        <h3 className="login__form-title">Login*</h3>
                        <input {...register('login', {
                            required: {
                                message: 'Обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                value: 3,
                                message: "Минимум 3 символа"
                            },

                            pattern: {
                                message: 'Напишите правильно',
                                value: /^[а-я-ЯёЁa-zA-Z]+$/
                            }
                        })} placeholder="Enter your login" type="text" className="login__form-input"/>
                        <p className='login__form-error'>
                            {errors.login && errors.login?.message}
                        </p>
                    </label>



                    {
                        location.pathname === '/register' ?
                            <label htmlFor="" className="login__form-label">
                                <h3 className="login__form-title">Name*</h3>
                                <input {...register('name', {
                                    required: {
                                        message: 'Имя обязательно к заполнению',
                                        value: true
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Минимум 3 символа"
                                    },

                                    pattern: {
                                        message: 'Напишите правильно свое имя',
                                        value: /^[а-я-ЯёЁa-zA-Z]+$/
                                    }
                                })} placeholder="Enter your name" type="text" className="login__form-input"/>
                                <p className='login__form-error'>
                                    {errors.name && errors.name?.message}
                                </p>
                            </label>
                            : ''
                    }

                    <label htmlFor="" className="login__form-label">
                        <h3 className="login__form-title">E-mail*</h3>
                        <input placeholder="JhonDoe12@gmil.com" type="email" className="login__form-input" {...register('email', {
                            required: {
                                message: 'Email обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                message: 'Минимум 10 символа',
                                value: 10
                            },
                            pattern: {
                                message: 'Напишите правильно свой email',
                                value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                            }
                        })}/>
                        <p className="login__form-error">
                            {errors.email && errors.email?.message}
                        </p>
                    </label>
                    <label htmlFor="" className="login__form-label">
                        <h3 className="login__form-title">Password</h3>
                        <label htmlFor="" className="login__form-pass">
                            <input placeholder='**********' type={passwordView ? 'text' : 'password'} className="login__form-input2" {...register('password', {
                                required: {
                                    message: "Пароль обязателен к заполнению",
                                    value: true
                                },
                                pattern: {
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                    message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                                }
                            })}/>
                            <span onClick={() => setPasswordView(prev => !prev)}>
                                {
                                    passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>
                                }
                            </span>
                        </label>
                        <p className='login__form-error'>
                            {errors.password && errors.password?.message}
                        </p>
                    </label>
                    <h4 className="add__subtitle">Upload a photo</h4>
                    <div className="add__images">
                        <span> <AiFillCamera/></span>
                        <input onChange={handleImageChanges} accept='image/*'  className="add__images-input" type="file"/>
                        <button onClick={() => addImage(selecttedImage)} type="button">Загрузить</button>
                        <h3 className="add__images-title">Add a photo</h3>
                        <p className="add__images-text">The main photo will be displayed in the search results</p>
                    </div>
                    {
                        location.pathname === '/register' ?
                            <label htmlFor="" className="login__form-label">
                                <h3 className="login__form-title">Phone*</h3>
                                <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel'  {...register('number', {
                                    required: {
                                        value: true,
                                        message: 'Это поле обязательное'
                                    },
                                    pattern: {
                                        value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                        message: 'Заполните номер телефона'
                                    }
                                })} className='login__form-input' placeholder='Номер телефона' />
                                <p className='login__form-error'>
                                    {errors.number && errors.number?.message}
                                </p>
                            </label>
                            : ''
                    }







                    {
                        location.pathname === '/login' ? <p className="login__form-subtitle">Forgot password?</p> : ''
                    }
                    {
                        location.pathname === '/register' ? <button className="login__form-send">Sign Up</button> : <button className="login__form-send">Log In</button>
                    }
                </form>
                {
                    location.pathname === '/register' ? <p className="login__form-text">Do you have an account? <Link className="login__form-link" to='/register'>Log in account</Link></p> : <p className="login__form-text">Don’t have an account? <Link className="login__form-link" to='/register'>Create account</Link></p>
                }
                <p className="login__form-span">OR</p>
                <button className="login__form-google"><span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8055 10.5415H21V10.5H12V14.5H17.6515C16.827 16.8285 14.6115 18.5 12 18.5C8.6865 18.5 6 15.8135 6 12.5C6 9.1865 8.6865 6.5 12 6.5C13.5295 6.5 14.921 7.077 15.9805 8.0195L18.809 5.191C17.023 3.5265 14.634 2.5 12 2.5C6.4775 2.5 2 6.9775 2 12.5C2 18.0225 6.4775 22.5 12 22.5C17.5225 22.5 22 18.0225 22 12.5C22 11.8295 21.931 11.175 21.8055 10.5415Z" fill="#FFDE33"/>
<path d="M3.15283 7.8455L6.43833 10.255C7.32733 8.054 9.48033 6.5 11.9998 6.5C13.5293 6.5 14.9208 7.077 15.9803 8.0195L18.8088 5.191C17.0228 3.5265 14.6338 2.5 11.9998 2.5C8.15883 2.5 4.82783 4.6685 3.15283 7.8455Z" fill="#FF3D00"/>
<path d="M12.0002 22.5C14.5832 22.5 16.9302 21.5115 18.7047 19.904L15.6097 17.285C14.5719 18.0742 13.3039 18.501 12.0002 18.5C9.39916 18.5 7.19066 16.8415 6.35866 14.527L3.09766 17.0395C4.75266 20.278 8.11366 22.5 12.0002 22.5Z" fill="#4CAF50"/>
<path d="M21.8055 10.5415H21V10.5H12V14.5H17.6515C17.2571 15.6082 16.5467 16.5766 15.608 17.2855L15.6095 17.2845L18.7045 19.9035C18.4855 20.1025 22 17.5 22 12.5C22 11.8295 21.931 11.175 21.8055 10.5415Z" fill="#1976D2"/>
</svg>
</span>Continue with Google</button>
            </div>
        </div>
    );
};

export default Form;