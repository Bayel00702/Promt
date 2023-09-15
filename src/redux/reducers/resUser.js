import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    success: false,
    error: null,
};

const resUserSlice = createSlice({
    name: 'resUser',
    initialState,
    reducers: {},
});

export default resUserSlice.reducer;