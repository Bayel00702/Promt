// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import axios from "../../utils/axios";

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4444"}),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        increaseViews: builder.mutation({
            query: ({userId, orderId}) => ({
                url: `increase-views/${orderId}`,
                body: {userId},
                method: "POST",
            })
        })
    })
});

export const {useIncreaseViewsMutation} = apiSlice;

// export const increaseViews = createAsyncThunk(
//     "oneOrder/getOneOrder",
//     async (orderID, thunkAPI,req) => {
//         try {
//             const res = await axios.post(`increase-views/${orderID}`);
//             console.log(res.data)
//             return res.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );
//
// const increaseViewsSlice = createSlice({
//     name: "oneOrder",
//     initialState: {
//         order: {},
//         status: '',
//         error: ''
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(increaseViews.pending, state => {
//                 state.status = 'loading';
//                 state.error = ''
//             })
//             .addCase(increaseViews.fulfilled, (state, {payload}) => {
//                 state.status = 'done';
//                 state.order = payload
//             })
//             .addCase(increaseViews.rejected, (state,{payload}) => {
//                 state.status = 'error';
//                 state.error= payload
//             })
//     }
// });
//
// export default increaseViewsSlice.reducer