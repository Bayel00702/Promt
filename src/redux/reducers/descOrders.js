import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getDescOrders = createAsyncThunk(
    "desc/getDescOrders",
    async (_, thunkAPI) => {
        try {
            const res = await axios('/orders?views=desc');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const descOrderSlice = createSlice({
    name: "desc",
    initialState: {
        desc: [],
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDescOrders.pending, state => {
                state.isLoading = true
            })
            .addCase(getDescOrders.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.desc = payload
            })
            .addCase(getDescOrders.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    },

});

export default descOrderSlice.reducer;


