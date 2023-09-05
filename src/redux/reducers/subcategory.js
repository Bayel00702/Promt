import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const  getSubCategory = createAsyncThunk(
    "subCategory/getSubCategory",
    async (categoryID, thunkAPI) => {
        try {
            const res = await axios(`/subcategory/${categoryID}`);
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const subCategorySlice = createSlice({
    name: "subcategory",
    initialState: {
        subcategory: [],
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSubCategory.pending, state => {
                state.isLoading = true
            })
            .addCase(getSubCategory.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.subcategory = payload
            })
            .addCase(getSubCategory.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    }
});

export default subCategorySlice.reducer