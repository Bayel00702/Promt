import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getOneOrder = createAsyncThunk(
    "oneOrder/getOneOrder",
    async (orderID, thunkAPI,req) => {
        try {
            const res = await axios(`order/${orderID}?views=0`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const orderSlice = createSlice({
    name: "oneOrder",
    initialState: {
        order: {},
        status: '',
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOneOrder.pending, state => {
                state.status = 'loading';
                state.error = ''
            })
            .addCase(getOneOrder.fulfilled, (state, {payload}) => {
                state.status = 'done';
                state.order = payload
            })
            .addCase(getOneOrder.rejected, (state,{payload}) => {
                state.status = 'error';
                state.error= payload
            })
    }
});

export default orderSlice.reducer