import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const  getAllCategory = createAsyncThunk(
    "category/getCategory",
    async (_, thunkAPI) => {
        try {
            const res = await axios('/category');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const categorySlice = createSlice({
   name: "category",
    initialState: {
        category: [],
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategory.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllCategory.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.category = payload
            })
            .addCase(getAllCategory.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    }
});

export default categorySlice.reducer