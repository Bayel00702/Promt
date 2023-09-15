import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getNewOrders = createAsyncThunk(
    "newOrders/getNewOrders",
    async (_, thunkAPI) => {
        try {
            const res = await axios('/orders?createdAt=2023-09-10');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const newOrdersSlice = createSlice({
    name: "desc",
    initialState: {
        newOrder: [],
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNewOrders.pending, state => {
                state.isLoading = true
            })
            .addCase(getNewOrders.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.newOrder = payload
            })
            .addCase(getNewOrders.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    },

});

export default newOrdersSlice.reducer;


