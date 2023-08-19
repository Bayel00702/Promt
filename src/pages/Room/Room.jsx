import React, {useState,useRef} from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {BiSolidKey} from 'react-icons/bi';
import {BsTrashFill} from 'react-icons/bs'
import {useForm} from "react-hook-form";
import {AiFillEyeInvisible, AiFillEye,AiFillPhone} from 'react-icons/ai'
import PromtsCard from "../../components/PromtsCard/PromtsCard";

const Room = () => {


    const [passwordView, setPasswordView] = useState(false);
    const password = useRef();

    const [tab, setTab] = useState("Profile settings");
    const [tab2, setTab2] = useState("Omurzakov Sanjarbek");



    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        watch

    } = useForm({
        mode: "onBlur"
    });
    password.current = watch("password");

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
                                        <img src="https://img5.lalafo.com/i/avatar/78/b6/0c/435dc351c5794a9310f8ff6283.jpeg" alt="" className="room__right-image__img"/>
                                        Omurzakov Sanjarbek
                                    </li>
                                    <li className={`room__left-item`}><span><HiOutlineMail/></span>Email</li>
                                    <li className="room__left-item"><span><AiFillPhone/></span>Phone Number</li>
                                    <li className={`room__left-item ${tab2 === 'Security and entry' ? 'active' : ''}`} onClick={() => setTab2('Security and entry')}><span><BiSolidKey/></span>Security and entry</li>
                                </ul>

                                <button className="room__left-btn">Delete account</button>
                            </div>
                            {
                                tab2 === 'Omurzakov Sanjarbek' ?
                                    <div className="room__right">
                                        <h2 className="room__right-title">Basic information</h2>
                                        <h3 className="room__right-subtitle">Profile photo</h3>
                                        <div className="room__right-image">
                                            <img src="https://img5.lalafo.com/i/avatar/78/b6/0c/435dc351c5794a9310f8ff6283.jpeg" alt="" className="room__right-image__img"/>
                                            <span><BsTrashFill/></span>
                                        </div>
                                        <label htmlFor="" className="room__right-label">
                                            <h3 className="room__right-subtitle">My name </h3>
                                            <input placeholder='Omurzakov Sanjarbek' type="text" className="room__right-input"/>

                                        </label>
                                        <label htmlFor="" className="room__right-label">
                                            <h3 className="room__right-subtitle">About me</h3>
                                            <input placeholder='Tell me something about yourself' type="text" className="room__right-input2"/>
                                        </label>

                                        <button className="room__right-btn">Save</button>
                                    </div>
                                    :
                                    <form className="room__pass">
                                        <label htmlFor="" className="login__form-label">
                                            <h3 className="login__form-title">Current Password</h3>
                                            <label htmlFor="" className="login__form-pass room__pass-input">
                                                <input placeholder='Current Password' type={passwordView ? 'text' : 'password'} className="login__form-input2" {...register('password', {
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
                                        <label htmlFor="" className="login__form-label">
                                            <h3 className="login__form-title">New password</h3>
                                            <label htmlFor="" className="login__form-pass room__pass-input">
                                                <input placeholder='Password' type={passwordView ? 'text' : 'password'} className="login__form-input2" {...register('password', {
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

                                        <label className='login__form-label'  htmlFor="">
                                            <h3 className="login__form-title">Confirm the password</h3>
                                            <div className="forms__form-field">
                                                <label htmlFor="" className="login__form-pass room__pass-input">
                                                    <input type={passwordView ? 'text' : 'password'}  {...register('confirmPwd', {
                                                        validate: value =>
                                                            value === password.current || "The password don't match"
                                                    })} className='login__form-input2'  placeholder='Confirm your Password' />

                                                    <span onClick={() => setPasswordView(prev => !prev)}>
                                {
                                    passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>
                                }
                            </span>
                                                </label>

                                            </div>
                                            <p className='forms__form-error'>
                                                {errors.confirmPwd && errors.confirmPwd?.message}
                                            </p>
                                        </label>

                                    </form>
                            }
                        </div>
                        :
                        <div className="room__row2">
                            <PromtsCard/>
                            <PromtsCard/>
                            <PromtsCard/>
                            <PromtsCard/>
                        </div>
                }

                </div>
        </section>
    );
};

export default Room;