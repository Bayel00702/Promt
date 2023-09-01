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
        favorites:[],
        status: '',
        error: ''
    },
    reducers: {
        addInFavorites: (state, {payload}) => {
            const existingIndex = state.favorites.some((item) => item.id === payload.id);

            if (existingIndex) {
                // Удаляем элемент, если он уже существует в избранных
                state.favorites = state.favorites.filter(item => item.id !== payload.id)
            } else {
                // Добавляем элемент, если его нет в избранных
               state.favorites = [...state.favorites, payload]
            }

            // Сохраняем избранные в localStorage
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        deleteInFavorites: (state, {payload}) => {
            state.favorites = state.favorites.filter((item) => item.id !== payload);
        }

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

export const {addInFavorites, deleteInFavorites} = userSlice.actions;
export default userSlice.reducer