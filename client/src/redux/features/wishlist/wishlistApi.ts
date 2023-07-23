import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';

export const wishlistApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createWishlist: builder.mutation({
            query: (data) => ({
                url: 'wishlist',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Profile", "Users"],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);
                } catch (error: any) {
                    toast.error(error.error.data.message);
                }
            }
        }),
    })
});

export const {
    useCreateWishlistMutation,
} = wishlistApi;