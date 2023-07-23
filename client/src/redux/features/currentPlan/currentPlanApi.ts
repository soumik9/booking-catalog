import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';

export const currentPlanApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCurrentPlan: builder.mutation({
            query: (data) => ({
                url: 'current-plan',
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
    useCreateCurrentPlanMutation,
} = currentPlanApi;