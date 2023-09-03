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

const rememberedKeys = ['auth'];

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

    }),
    enhancers: [rememberEnhancer(window.localStorage, rememberedKeys,{persistWholeStore: true})]
});

export default store