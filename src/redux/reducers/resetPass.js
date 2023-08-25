import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const resetPass = createAsyncThunk(
    "resetPass/resetPass",
    async (_,thunkAPI) => {
        try {
            const res = await axios('http://localhost:4444/reset/password');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const resetPasswordSlice = createSlice({
    name: "resetPassword",
    initialState: {
        data: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetPass.pending, state => {
                state.isLoading = true
            })
            .addCase(resetPass.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.data = payload
            })
            .addCase(resetPass.rejected, state => {
                state.isLoading = false
            })

    }
});

export default resetPasswordSlice.reducer


