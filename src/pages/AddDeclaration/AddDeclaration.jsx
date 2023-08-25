import React from 'react';
import {AiFillCamera} from 'react-icons/ai'
import InputMask from "react-input-mask";
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {useDispatch} from "react-redux";
import {order} from '../../redux/reducers/order'
import {useNavigate} from "react-router-dom";

const AddDeclaration = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        formState :{
            errors
        }

    } = useForm();

    const onSubmit = (data) => {
        axios.post('/order', data)
            .then(res => {
                dispatch(order(res.data));
                navigate('/');
                console.log(data)
            })
            .catch((err) =>  console.log(err));
    };


    return (
        <section className="add">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} action="" className="add__form">
                    <h2 className="add__title">Posting an ad is easy!</h2>
                    <label htmlFor="" className="add__label">
                        <h3 className="add__subtitle">Название</h3>
                        <input placeholder="Ведите название товара" {...register('title', {
                            required: {
                                message: 'Обязательно к заполнению',
                                value: true
                            },
                        })} type="text" className="add__input"/>
                        <p className='login__form-error'>{errors.title && errors.title?.message}</p>
                    </label>
                    <h4 className="add__subtitle">Upload a photo</h4>
                    <div className="add__images">
                       <span> <AiFillCamera/></span>
                        <h3 className="add__images-title">Add a photo</h3>
                        <p className="add__images-text">The main photo will be displayed in the search results</p>
                    </div>
                    <label htmlFor="" className="add__label">
                        <h3 className="add__subtitle">Description</h3>
                        <textarea className='add__textarea'  {...register('description', {
                            required: {
                                message: 'Обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                value: 3,
                                message: "Минимум 3 символа"
                            },

                            pattern: {
                                message: 'Напишите правильно описание',
                                value: /^[а-я-ЯёЁa-zA-Z]+$/
                            }
                        })} name="posting description" id="" cols="30" rows="10" placeholder='Selling Samsung Galaxy S9 in perfect condition. Bought 1 year ago. Reason for selling: buying a new phone'/>
                        <p className='login__form-error'>{errors.descrption && errors.descrption?.message}</p>

                    </label>

                    <label htmlFor="" className="add__label">
                        <h3 className="add__subtitle">Категория</h3>
                        <input placeholder="Категория" {...register('category', {
                            required: {
                                message: 'Обязательно к заполнению',
                                value: true
                            },
                        })} type="text" className="add__input"/>
                        <p className='login__form-error'>{errors.category && errors.category?.message}</p>
                    </label>
                    <label htmlFor="" className="add__label">
                        <h3 className="add__subtitle">Город</h3>
                        <input placeholder="Ведите город" {...register('city', {
                            required: {
                                message: 'Обязательно к заполнению',
                                value: true
                            },
                        })} type="text" className="add__input"/>
                        <p className='login__form-error'>{errors.city && errors.city?.message}</p>
                    </label>
                    <label htmlFor="" className="add__label">
                        <h3 className="add__subtitle">Цена</h3>
                        <input {...register('price', {
                            required: {
                                message: 'Обязательно к заполнению',
                                value: true
                            },
                        })} placeholder="Договорная" type="text" className="add__input"/>
                        <p className='login__form-error'>{errors.price && errors.price?.message}</p>

                    </label>
                    <label htmlFor="" className="add__label">
                        <h3 className="add__subtitle">Status</h3>
                        <input {...register('Status', {
                            required: {
                                message: 'Обязательно к заполнению',
                                value: true
                            },
                        })} placeholder="Договорная" type="text" className="add__input"/>
                        <p className='login__form-error'>{errors.status && errors.status?.message}</p>

                    </label>
                    <label htmlFor="" className="add__label">
                        <h3 className="add__subtitle">Телефон</h3>
                        <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel'  {...register('phone', {
                            required: {
                                value: true,
                                message: 'Это поле обязательное'
                            },
                            pattern: {
                                value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                message: 'Заполните номер телефона'
                            }
                        })} className='add__input' placeholder='Номер телефона' />
                        <p className='add__error'>
                            <p className='login__form-error'>{errors.phone && errors.phone?.message}</p>
                        </p>
                    </label>
                    <button style={{marginTop: '20px'}} type="button" className="add__btn">Опубликовать</button>
                </form>
            </div>
        </section>
    );
};

export default AddDeclaration;