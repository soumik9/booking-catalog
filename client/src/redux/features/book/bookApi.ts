import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';

export const bookApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // all books endpoint here
        getBooks: builder.query({
            query: ({ limit, search, isLatest }) => isLatest ? `book?sortBy=createdAt&sortOrder=asc&limit=${limit}` : `book?sortBy=createdAt&sortOrder=asc&limit=${limit}&searchTerm=${search}`,
            keepUnusedDataFor: 600,
            providesTags: ['Books'],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error: any) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // get book endpoint here
        getBook: builder.query({
            query: (bookId) => `book/${bookId}`,
            providesTags: (result, error, arg) => [{
                type: 'Book', id: arg
            }],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error: any) {
                    // toast.error(error?.error?.data?.message);
                    console.log(error?.error?.data?.message)
                }
            }
        }),

        // create new Book endpoint here
        createBook: builder.mutation({
            query: (data) => ({
                url: 'book',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Books"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result);
                    toast.success(result.data.message);
                } catch (error: any) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // updating Book data
        updateBook: builder.mutation({
            query: ({ bookId, updateData }) => ({
                url: `book/${bookId}`,
                method: 'PATCH',
                body: updateData,
            }),
            invalidatesTags: (result, error, arg) => [
                'Books',
                { type: 'Book', id: arg.bookId }
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

        deleteBook: builder.mutation({
            query: (bookId) => ({
                url: `book/${bookId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Books'],
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
    useCreateBookMutation,
    useDeleteBookMutation,
    useGetBookQuery,
    useGetBooksQuery,
    useUpdateBookMutation
} = bookApi;