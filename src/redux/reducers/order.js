import {createSlice} from "@reduxjs/toolkit";
import {authSlice} from "./auth";

export const orderSlice = createSlice({
   name: "order",
    initialState: {
        order: null
    },
    reducers: {
       order: (state, action) => {
           state.order = action.payload.order;
       }
    }
});

export const {order} = orderSlice.actions;
export default orderSlice.reducer