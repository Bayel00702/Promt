import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAscCategory = createAsyncThunk(
    "asc/getAscCategory",
    async (_, thunkAPI) => {
        try {
            const res = await axios('/orders?price=asc');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
const ascSlice = createSlice({
    name: "asc",
    initialState: {
        asc: [],
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAscCategory.pending, state => {
                state.isLoading = true
            })
            .addCase(getAscCategory.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.asc = payload
            })
            .addCase(getAscCategory.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    },

});
export default ascSlice.reducer;

