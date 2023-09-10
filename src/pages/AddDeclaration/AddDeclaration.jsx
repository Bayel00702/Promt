import React, {useEffect, useState} from 'react';
import {AiFillCamera} from 'react-icons/ai'
import InputMask from "react-input-mask";
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {useDispatch, useSelector} from "react-redux";
import {order} from '../../redux/reducers/order'
import {useNavigate} from "react-router-dom";
import {getAllCategory} from "../../redux/reducers/category";
import {getSubCategory} from "../../redux/reducers/subcategory";

const AddDeclaration = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {orderEl} = useSelector(store => store.order);
    const {category} = useSelector(store => store.category);
    const {subcategory} = useSelector(store => store.subcategory);

    const [btn, setBtn] = useState(false);
    const [subCategory, setSubCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    const [gettedImageUrl, setGettedImageUrl] = useState("");
    const {
        register,
        handleSubmit,
        formState :{
            errors
        }

    } = useForm();

    const onSubmit = (data) => {
        axios.post('/order', {...data,...orderEl, image: gettedImageUrl, category: selectedCategory, subcategory: selectedSubcategory})
            .then(res => {
                dispatch(order(res.data));

                navigate('/');
                console.log(data)
            })
            .catch((err) => console.log(err));
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
                setSelectedImage(event.target.files[0]);
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
                  setGettedImageUrl(res.data.url)
              })
              .catch(err => console.log(err)

              )
        };



    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

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
                                <input onChange={handleImageChange} accept='image/*'  className="add__images-input" type="file"/>
                                <button onClick={() => addImage(selectedImage)} type="button" className="add__images-title">Add a photo</button>
                                <p className="add__images-text">The main photo will be displayed in the search results</p>
                            </div>
                            <label htmlFor="" className="add__label">
                                <h3 className="add__subtitle">Description</h3>
                                <textarea className='add__textarea' {...register('description', {
                                    required: {
                                        message: 'Обязательно к заполнению',
                                        value: true
                                    }
                                })} placeholder='Selling Samsung Galaxy S9 in perfect condition. Bought 1 year ago. Reason for selling: buying a new phone'/>
                                <p className='login__form-error'>{errors.descrption && errors.descrption?.message}</p>

                            </label>



                            <label htmlFor="" className="add__label">
                                <h3 className="add__subtitle">Категория</h3>
                                <p className="add__category" onClick={() => {
                                    if (setBtn) {
                                        setBtn((prev) => !prev);
                                    }

                                }}>Category</p>

                                <div className={`add__subcategory ${btn ? 'active' : ''}`}>
                                    {
                                        category.map((item) => (
                                            <p {...register('category')}
                                               className={`add__subcategory-item ${selectedCategory === item.name ? 'selected' : ''}`}
                                               onClick={() => {
                                                if (setSubCategory) {
                                                    setSubCategory((prev) => !prev)
                                                }
                                                setSelectedCategory(item.name);
                                                dispatch(getSubCategory(item._id))

                                            }}>{item.name}</p>
                                        ))
                                    }
                                </div>

                                <div className={`add__subcategory-desc ${subCategory ? 'active' : ''}`}>
                                    {
                                        subcategory.map((item) => (
                                            <p {...register('subcategory')}
                                               className={`add__subcategory-desc__item ${selectedSubcategory === item.subCategoryName ? 'selectedSub': ''}`}
                                                onClick={() => {
                                                    setSelectedSubcategory(item.subCategoryName)
                                                }}
                                            >{item.subCategoryName}</p>
                                        ))
                                    }
                                </div>                                <p className='login__form-error'>{errors.category && errors.category?.message}</p>
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
                                <input {...register('status', {
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
                            <button style={{marginTop: '20px'}} type="submit" className="add__btn">Опубликовать</button>
                        </form>
            </div>
        </section>
    );
};

export default AddDeclaration;