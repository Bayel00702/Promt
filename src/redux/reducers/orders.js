import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAllOrders = createAsyncThunk(
    "orders/getAllOrders",
    async (filter,thunkAPI) => {
        try {
            const filterQuery = filter.reduce((acc, rec, idx ) => (acc+=`${idx === 0 ? "?" : "&"}category=${rec}`) , "");
            // const searchQuery = search ? `&title=${search}` : '';
            console.log(filterQuery);
            const res = await axios(`/orders${filter.length > 0 ? filterQuery : ''}`);
            // const res = await axios(`/orders${filter.length > 0 ? filterQuery : ''}&{searchQuery}`);
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        data: [],
        filter: [],
        isLoading: false,
        error: '',
        // search: '',
    },
    reducers: {
        changeCategory: (state,{payload}) => {
            state.filter = payload
        },
        setSearchQuery: (state, { payload }) => {
            state.search = payload; // Обновите значение поиска в состоянии
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrders.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllOrders.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.data = payload
            })
            .addCase(getAllOrders.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    }
});

export const {changeCategory,setSearchQuery} = ordersSlice.actions;

export default ordersSlice.reducer