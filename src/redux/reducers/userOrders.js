import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getAllUserOrders = createAsyncThunk(
    "userOrders/getAllUserOrders",
    async (userID,thunkAPI) => {
        try {
            const res = await axios(`/orders?id=${userID}`);
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);

const userOrdersSlice = createSlice({
    name: "userOrders",
    initialState: {
        userOrders: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUserOrders.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllUserOrders.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.userOrders = payload
            })
            .addCase(getAllUserOrders.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    }
});

export default userOrdersSlice.reducer
