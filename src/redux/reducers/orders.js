import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAllOrders = createAsyncThunk(
    "orders/getAllOrders",
    async (_,thunkAPI) => {
        try {
            const res = await axios('/orders');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        data: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrders.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllOrders.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.data = payload
            })
            .addCase(getAllOrders.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    }
});

export default ordersSlice.reducer