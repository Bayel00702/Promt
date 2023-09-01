import {configureStore} from "@reduxjs/toolkit";
import {rememberReducer, rememberEnhancer} from "redux-remember";
import auth from "./reducers/auth";
import password from "./reducers/resetPassword";
import order from "./reducers/order";
import orders from "./reducers/orders";
import oneOrder from "./reducers/product";
import oneUser from "./reducers/user";

const rememberedKeys = ['auth'];

const store = configureStore({
    reducer: rememberReducer({
        auth,
        password,
        order,
        orders,
        oneOrder,
        oneUser,

    }),
    enhancers: [rememberEnhancer(window.localStorage, rememberedKeys,{persistWholeStore: true})]
});

export default store