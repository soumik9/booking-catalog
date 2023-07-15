import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: async (headers, { getState }) => {
            // @ts-ignore
            const token = getState()?.auth?.accessToken;
            token && headers.set("Authorization", `Bearer ${token}`)
            return headers;
        }
    }),
    tagTypes: ['Books', 'Book'],
    endpoints: (builder) => ({}),
})