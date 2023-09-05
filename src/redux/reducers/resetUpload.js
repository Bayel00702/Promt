import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    success: false,
    error: null,
};

const uploadResetSlice = createSlice({
    name: 'uploadReset',
    initialState,
    reducers: {},
});

export default uploadResetSlice.reducer;