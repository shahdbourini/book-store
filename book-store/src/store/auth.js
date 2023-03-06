import React from 'react';
import { createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {isloggedin: false},
    reducers: {
        loginOut: (state) => {
            state.isloggedin = ! state.isloggedin;
        }
    }
})

export const {loginOut} = authSlice.actions;
export default authSlice.reducer;