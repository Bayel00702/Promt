import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        authUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logOutUser: (state, action) => {
            state.user = null;
            state.token = null;
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
});



export const {authUser, logOutUser, setUser} = authSlice.actions;
export default authSlice.reducer
