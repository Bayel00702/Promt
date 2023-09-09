import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getDescCategory = createAsyncThunk(
    "desc/getDescCategory",
    async (_, thunkAPI) => {
        try {
            const res = await axios('/orders?price=desc');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const descSlice = createSlice({
    name: "desc",
    initialState: {
        desc: [],
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDescCategory.pending, state => {
                state.isLoading = true
            })
            .addCase(getDescCategory.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.desc = payload
            })
            .addCase(getDescCategory.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    },

});

export default descSlice.reducer;


