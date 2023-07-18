import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { IUser } from '../../../config/types';

// Define a type for the slice state
interface authType {
    accessToken: string | undefined;
    user: IUser | undefined;
    isAuthenticated: boolean | undefined;
    _id: string | undefined;
}

const initialState: authType = {
    accessToken: undefined,
    user: undefined,
    isAuthenticated: undefined,
    _id: undefined,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        profileLog: (state, action) => {
            state.user = action.payload;
        },
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
            state._id = action.payload._id;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
            state.isAuthenticated = undefined;
            state._id = undefined;

            Cookies.remove('accessToken');
            Cookies.remove('_id');
        }
    }
})

export const { userLoggedIn, userLoggedOut, profileLog } = authSlice.actions;
export default authSlice.reducer;