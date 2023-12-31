import {configureStore} from "@reduxjs/toolkit";
import {rememberReducer, rememberEnhancer} from "redux-remember";
import auth from "./reducers/auth";
import password from "./reducers/resetPassword";
import order from "./reducers/order";
import orders from "./reducers/orders";
import oneOrder from "./reducers/product";
import oneUser from "./reducers/user";
import userOrders from "./reducers/userOrders";
import category from "./reducers/category";
import subcategory from "./reducers/subcategory";
import upload from "./reducers/resetUpload";
import asc from "./reducers/asc";
import desc from "./reducers/desc";
import orderDesc from "./reducers/descOrders";
import newOrders from "./reducers/newOrder";
import resUser from "./reducers/resUser";
import {apiSlice} from './reducers/increaseViews'



const rememberedKeys = ['auth', 'oneOrder'];

const store = configureStore({
    reducer: rememberReducer({
        auth,
        password,
        order,
        orders,
        oneOrder,
        oneUser,
        userOrders,
        category,
        subcategory,
        upload,
        asc,
        desc,
        orderDesc,
        newOrders,
        resUser,
        [apiSlice.reducerPath]: apiSlice.reducer
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    enhancers: [rememberEnhancer(window.localStorage, rememberedKeys,{persistWholeStore: true})]
});

export default store