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
        favorites: [],
        status: '',
        error: ''
    },
    reducers: {
        addInFavorites: (state, {payload}) => {
            const existingIndex = state.favorites.some((item) => item._id === payload._id);

            if (existingIndex) {
                state.favorites = state.favorites.filter(item => item._id !== payload._id)
            } else {
               state.favorites = [...state.favorites, payload]
            }
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        updateFavorites: (state) => {
            state.favorites = JSON.parse(localStorage.getItem('favorites')) || [] && JSON.parse(localStorage.getItem('favorites')) || []
        }
        // deleteInFavorites: (state, {payload}) => {
        //     state.favorites = state.favorites.filter((item) => item.id !== payload);
        // },
        // setFav: (state, {payload}) => {
        //     state.favorites = [...state.favorites, payload]
        // }

    },
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

export const {addInFavorites, updateFavorites} = userSlice.actions;
export default userSlice.reducer