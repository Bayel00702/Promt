import React, {useState, useEffect} from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {BiSolidKey} from 'react-icons/bi';
import {BsTrashFill} from 'react-icons/bs'
import {useForm} from "react-hook-form";
import {AiFillEyeInvisible, AiFillEye,AiFillPhone} from 'react-icons/ai'
import PromtsCard from "../../components/PromtsCard/PromtsCard";
import axios from "../../utils/axios";
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {logOutUser, setUser, setImage} from "../../redux/reducers/auth";
import {getAllUserOrders} from "../../redux/reducers/userOrders";
import {getOneUser} from "../../redux/reducers/user";
import InputMask from "react-input-mask";

const Room = () => {

    const [passwordView, setPasswordView] = useState(false);
    const navigate = useNavigate();

    const {user} = useSelector(store => store.auth);
    const {userOrders} = useSelector(store => store.userOrders);

    const dispatch = useDispatch();

    const [tab, setTab] = useState("Profile settings");
    const [tab2, setTab2] = useState("Omurzakov Sanjarbek");
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedUser, setSelectedUser] = useState({});

    const token = localStorage.getItem("@@remember-rootState") ? JSON.parse(localStorage.getItem("@@remember-rootState"))?.auth?.token : "";


    const onSubmit = (data) => {
        axios.post('/reset/password', data,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },

        }).then(({data}) =>
            {
                console.log(data);
                navigate('/')
            }
        );
    };

    const delUser = (data) => {
        axios.delete(`/user/${user._id}`, data,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        }).then(({data}) => {
                console.log(data);
                navigate('/')
        }
        )
    };

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
        console.log(event)
    };


    const resUpload = async (file) => {
        let formData = new FormData();
        formData.append('file', file);
        await axios.post(`/reset/upload/${user._id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then(({data}) => {
            console.log(data);
            dispatch(setImage(data.user))
        })
    };

    const resUser = async  (data) =>{
        console.log(data)
        await axios.post(`/user/${user._id}`, data, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        }).then((res) =>
            {
                console.log(res.data);
                dispatch(setUser(res.data.user));
                navigate('/')
            }
        )
    };
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },

    } = useForm({
        mode: "onBlur"
    });


    useEffect(() => {
        dispatch(getOneUser(user._id));
        dispatch(getAllUserOrders(user._id));
    }, []);






        return (
            <section className="room">
                <div className="container">
                    <div className="room__top">
                        <div className="room__list">
                            <button className={`room__item ${tab === 'My announcement' ? 'active': ''}`}  onClick={() => setTab('My announcement')}>My announcement</button>
                            <button className={`room__item  ${tab === 'Profile settings' ? 'active': ''}`}  onClick={() => setTab('Profile settings')}> Profile settings</button>
                        </div>
                    </div>
                    {
                        tab === 'Profile settings' ?
                            <div className="room__row">
                                <div className="room__left">
                                    <ul className="room__left-list">
                                        <li className={`room__left-gen room__left-item ${tab2 === 'Omurzakov Sanjarbek' ? 'active' : ''}`} onClick={() => setTab2('Omurzakov Sanjarbek')}>
                                            <img src={user.image} alt="" className="room__right-image__img"/>
                                            {user.name}
                                        </li>
                                        <li className={`room__left-item ${tab2 === 'Email' ? 'active' : ''}`} onClick={() => setTab2('Email')}><span><HiOutlineMail/></span>Email</li>
                                        <li className={`room__left-item `}><span><AiFillPhone/></span>Phone Number</li>
                                        <li className={`room__left-item ${tab2 === 'Security and entry' ? 'active' : ''}`} onClick={() => setTab2('Security and entry')}><span><BiSolidKey/></span>Security and entry</li>
                                    </ul>

                                    <div className="room__left-btns">
                                        <button onClick={() => {
                                            dispatch(logOutUser());
                                            navigate('/')
                                        }} className="room__left-signOut">Sign Out</button>
                                        <button className="room__left-btn"
                                        onClick={() =>{
                                            delUser();
                                            dispatch(logOutUser());
                                            navigate('/')
                                        }}
                                        >Delete account</button>
                                    </div>
                                </div>
                                {
                                    tab2 === 'Omurzakov Sanjarbek' ?
                                        <div className="room__right">
                                            <h2 className="room__right-title">Basic information</h2>
                                            <h3 className="room__right-subtitle">Profile photo</h3>
                                            <div className="room__right-image">
                                                <img src={user.image} alt="" className="room__right-image__img"/>
                                                <span><BsTrashFill/></span>
                                                <input onChange={handleImageChange} accept='image/*' type="file"/>
                                            </div>
                                            <label htmlFor="" className="room__right-label">
                                                <h3 className="room__right-subtitle">My name </h3>
                                                <input placeholder={user.name} type="text" className="room__right-input"/>

                                            </label>
                                            <label htmlFor="" className="room__right-label">
                                                <h3 className="room__right-subtitle">About me</h3>
                                                <input placeholder='Tell me something about yourself' type="text" className="room__right-input2"/>
                                            </label>

                                            <button  onClick={() => resUpload(selectedImage)} className="room__right-btn">Save</button>
                                        </div>
                                        : tab2 === 'Security and entry' ?
                                        <form
                                            onSubmit={handleSubmit(onSubmit)}
                                            className="room__pass">
                                            <label htmlFor="" className="login__form-label">
                                                <h3 className="login__form-title">Email</h3>
                                                <label htmlFor="" className="login__form-pass room__pass-input">
                                                    <input placeholder='Current email' className="login__form-input2" {...register('email', {
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
                                                </label>
                                                <p className='login__form-error'>
                                                    {errors.email && errors.email?.message}
                                                </p>
                                            </label>
                                            <label htmlFor="" className="login__form-label">
                                                <h3 className="login__form-title">Current password</h3>
                                                <label htmlFor="" className="login__form-pass room__pass-input">
                                                    <input placeholder='Password' type={passwordView ? 'text' : 'password'} className="login__form-input2" {...register('oldPassword', {
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
                                                    {errors.oldPassword && errors.oldPassword?.message}
                                                </p>
                                            </label>

                                            <label className='login__form-label'  htmlFor="">
                                                <h3 className="login__form-title">Confirm the password</h3>
                                                <div className="forms__form-field">
                                                    <label htmlFor="" className="login__form-pass room__pass-input">
                                                        <input type={passwordView ? 'text' : 'password'}  {...register('newPassword', {
                                                            required: {
                                                                message: "Пароль обязателен к заполнению",
                                                                value: true
                                                            },
                                                            pattern: {
                                                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                                                message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                                                            }
                                                        })} className='login__form-input2'  placeholder='Confirm your Password' />

                                                        <span onClick={() => setPasswordView(prev => !prev)}>
                                {
                                    passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>
                                }
                            </span>
                                                    </label>

                                                </div>
                                                <p className='login__form-error'>
                                                    {errors.newPassword && errors.newPassword?.message}
                                                </p>
                                            </label>
                                            <button className="room__right-btn" type='submit'>Submit</button>
                                        </form> :
                                        tab2 === 'Email' ?
                                            <form
                                                onSubmit={handleSubmit(resUser)}
                                                className="room__resUser">
                                                <label htmlFor="" className="room__right-label">
                                                    <h3 className="room__right-subtitle">My name </h3>
                                                    <input placeholder={user.name} {...register('name')} type="text" className="room__right-input"/>
                                                </label>
                                                <label htmlFor="" className="room__right-label">
                                                    <h3 className="room__right-subtitle">My login </h3>
                                                    <input placeholder={user.login} {...register('login')} type="text" className="room__right-input"/>
                                                </label>
                                                <label htmlFor="" className="room__right-label">
                                                    <h3 className="room__right-subtitle">My Email</h3>
                                                    <input placeholder={user.email} {...register('email')} type="email" className="room__right-input"/>
                                                </label>
                                                <label htmlFor="" className="room__right-label">
                                                    <h3 className="room__right-subtitle">Phone*</h3>
                                                    <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel'  {...register('number')} className='room__right-input' placeholder='Номер телефона' />
                                                </label>
                                                <button   type="submit" className="room__right-btn">Save</button>
                                            </form>
                                            : ''
                                }
                            </div>
                            : tab === 'My announcement' ?
                            <div className="room__row2">
                                {
                                    userOrders.map((item) => (
                                        <PromtsCard item={item}/>
                                    ))
                                }
                            </div> : ''
                    }

                </div>
            </section>
        );


};

export default Room;