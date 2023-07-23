import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';

export const currentPlanApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // get current plans of logged user
        getCurrentPlansByUser: builder.query({
            query: (userId) => `current-plan/by-user`,
            providesTags: (result, error, arg) => ['CurrentPlan'],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error: any) {
                    console.log(error?.error?.data?.message)
                }
            }
        }),
        createCurrentPlan: builder.mutation({
            query: (data) => ({
                url: 'current-plan',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Profile", "Users", "CurrentPlan"],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);
                } catch (error: any) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // updating current plan data
        updateCurrentPlan: builder.mutation({
            query: ({ planId, updateData }) => ({
                url: `current-plan/${planId}`,
                method: 'PATCH',
                body: updateData,
            }),
            invalidatesTags: (result, error, arg) => [
                "Profile", "Users", 'CurrentPlan'
            ],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
    useUpdateCurrentPlanMutation,
    useGetCurrentPlansByUserQuery
} = currentPlanApi;