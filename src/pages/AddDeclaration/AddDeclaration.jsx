import React from 'react';
import {AiFillCamera} from 'react-icons/ai'
import InputMask from "react-input-mask";
import {useForm} from "react-hook-form";

const AddDeclaration = () => {

    const {
        register,
        handleSubmit,
        formState :{
            errors
        }

    } = useForm();
    return (
        <section className="add">
            <div className="container">
                <form action="" className="add__form">

                    <h2 className="add__title">Posting an ad is easy!</h2>
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

                    </label>
                    <h3 className="add__subtitle">Категория</h3>
                    <button className="add__btn">Выбрать</button>
                    <label htmlFor="" className="add__label">
                        <h3 className="add__subtitle">Город</h3>
                        <input placeholder="Ведите город" type="text" className="add__input"/>
                        {errors.description && errors.description?.message}
                    </label>
                    <label htmlFor="" className="add__label">
                        <h3 className="add__subtitle">Цена</h3>
                        <input {...register('price', {
                            required: {
                                message: 'Обязательно к заполнению',
                                value: true
                            },
                        })} placeholder="Договорная" type="text" className="add__input"/>
                        {errors.price && errors.price?.message}

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
                            {errors.phone && errors.phone?.message}
                        </p>
                    </label>
                    <button style={{marginTop: '20px'}} className="add__btn">Опубликовать</button>
                </form>
            </div>
        </section>
    );
};

export default AddDeclaration;