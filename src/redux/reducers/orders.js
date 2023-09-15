import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAllOrders = createAsyncThunk(
    "orders/getAllOrders",
    async ({filter,search,price},thunkAPI) => {
        try {
            console.log(price);
            const filterQuery = filter.reduce((acc, rec, idx ) => (acc+=`${idx === 0 ? "" : "&"}category=${rec}`) , "");
            const res = await axios(`/orders?${search.length ? `title=${search}` + "&": ""}${filter.length ? filterQuery + "&" : ""}${price.length ? `${price}` : ""}`);

            return res.data
        }
        catch (error) {
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
        search: '',
        price: '',
    },
    reducers: {
        changeCategory: (state,{payload}) => {
            state.filter = payload
        },
        setSearchQuery: (state, { payload }) => {
            state.search = payload; // Обновите значение поиска в состоянии
        },
        changePrice: (state,{payload}) => {
            state.price = payload
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

export const {changeCategory,setSearchQuery,changePrice} = ordersSlice.actions;

export default ordersSlice.reducer