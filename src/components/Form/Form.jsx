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
                    {
                        location.pathname === '/register' ?
                            <h4 className="add__subtitle">Upload a photo</h4>
                            : ''

                    }
                    {
                        location.pathname === '/register' ?
                            <div className="add__images">
                                <span> <AiFillCamera/></span>
                                <input onChange={handleImageChanges} accept='image/*'  className="add__images-input" type="file"/>
                                <button onClick={() => addImage(selecttedImage)} type="button">Загрузить</button>
                                <h3 className="add__images-title">Add a photo</h3>
                                <p className="add__images-text">The main photo will be displayed in the search results</p>
                            </div>
                            : ''

                    }
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
                        location.pathname === '/register' ? <button className="login__form-send">Sign Up</button> : <button className="login__form-send">Log In</button>
                    }
                </form>
                {
                    location.pathname === '/register' ? <p className="login__form-text">Do you have an account? <Link className="login__form-link" to='/register'>Log in account</Link></p> : <p className="login__form-text">Don’t have an account? <Link className="login__form-link" to='/register'>Create account</Link></p>
                }
            </div>
        </div>
    );
};

export default Form;