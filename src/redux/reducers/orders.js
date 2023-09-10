import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAllOrders = createAsyncThunk(
    "orders/getAllOrders",
    async (filter,thunkAPI) => {
        try {
            const filterQuery = filter.reduce((acc, rec, idx ) => (acc+=`${idx === 0 ? "?" : "&"}category=${rec}`) , "");
            const res = await axios(`/orders${filter.length > 0 ? filterQuery : ''}`);
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
        filter: [],
        isLoading: false,
        error: ''
    },
    reducers: {
        changeCategory: (state,{payload}) => {
            state.filter = payload
        }
    },
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

export const {changeCategory} = ordersSlice.actions

export default ordersSlice.reducer