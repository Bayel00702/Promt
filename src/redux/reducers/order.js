import {createSlice} from "@reduxjs/toolkit";

const creatorId = localStorage.getItem("@@remember-rootState").auth ? JSON.parse(localStorage.getItem("@@remember-rootState")).auth.user._id : "";


export const orderSlice = createSlice({
   name: "order",
    initialState: {
        orderEl:{
            creatorId: creatorId,
            views: 0,
        }
    },
    reducers: {
       order: (state, action) => {
           state.order = action.payload.order;
       },
    }
});

export const {order} = orderSlice.actions;
export default orderSlice.reducer