import { apiSlice } from "../api/apiSlice";
import Cookies from 'js-cookie';
import { profileLog, userLoggedIn } from "./authSlice";
import toast from 'react-hot-toast';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // register endpoint here
        signup: builder.mutation({
            query: (data) => ({
                url: 'auth/signup',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Users"],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);
                } catch (error: any) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // login endpoint here
        login: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {

                    const result = await queryFulfilled;

                    // setting logged data to redux state
                    dispatch(userLoggedIn({
                        accessToken: result.data.data.accessToken,
                        _id: result.data.data.user._id,
                        user: result.data.data.user,
                    }));

                    // setting cookies
                    Cookies.set('accessToken', result.data.data.accessToken, { expires: arg.rememberMe ? 30 : 1 });
                    Cookies.set('_id', result.data.data.user._id, { expires: arg.rememberMe ? 30 : 1 });
                    toast.success(result.data.message);
                } catch (error: any) {
                    toast.error(error.error.data.message)
                }
            }
        }),

        // get profile endpoint here
        getProfile: builder.query({
            query: () => `auth/profile`,
            providesTags: ['Profile'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                    // dispatch(profileLog(result.data.user));
                } catch (error: any) {
                    toast.error(error.error.data.message);
                }
            }
        }),

    })
});

export const { useSignupMutation, useLoginMutation, useGetProfileQuery } = authApi;