import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getOneUser = createAsyncThunk(
    "oneUser/getOneUser",
    async (userID,thunkAPI) => {
        try {
            const res = await axios(`user/${userID}`);
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        status: '',
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOneUser.pending, state => {
                state.status = 'loading';
                state.error = ''
            })
            .addCase(getOneUser.fulfilled, (state, {payload}) => {
                state.status = 'done';
                state.user = payload
            })
            .addCase(getOneUser.rejected, (state,{payload}) => {
                state.status = 'error';
                state.error= payload
            })
    }
});

export default userSlice.reducer