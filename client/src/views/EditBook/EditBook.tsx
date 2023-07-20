import { useParams } from 'react-router-dom';
import { useGetBookQuery, useUpdateBookMutation } from '../../redux/features/book/bookApi';
import CardLayoutScreen from '../../components/CardLayout/CardLayoutScreen';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useEffect } from 'react';
import { IBook } from '../../config/types';

const validationSchema = yup.object().shape({
    title: yup.string().required('Email is required'),
    author: yup.string().required('author is required'),
    genre: yup.string().required('Genre is required'),
    publication_date: yup.object().shape({
        date: yup.string().required('Date is required'),
        month: yup.string().required('Month is required'),
        year: yup.string().required('Year is required')
    }).required('Publication Date is required'),
});

const EditBook = () => {

    // router hooks
    const { bookId } = useParams();

    // use hook form
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    // get books from redux api
    const { data: book, isLoading, isError } = useGetBookQuery(bookId);
    const [updateBook, { isLoading: updateLoading }] = useUpdateBookMutation();

    useEffect(() => {
        if (book && book.data) {
            const { title, author, genre, publication_date } = book?.data;
            setValue('title', title);
            setValue('author', author);
            setValue('genre', genre);
            setValue('publication_date', publication_date);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [book?.data])


    // submit
    const updateBookData = (data: IBook): void => {

        const updateData = { ...data };

        updateBook({
            bookId, updateData, headers: {
                'Content-Type': 'application/json',
            }
        })
    };

    if (isLoading) {
        return <div className='f-center'>Loading...</div>
    }
    if (isError) {
        return <div className='f-center'>Error...</div>
    }

    return (
        <CardLayoutScreen title='Edit Book'>
            <form onSubmit={handleSubmit(updateBookData)} className="mt-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        {...register('title')}
                        className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    {errors.title && <p className="mt-1 text-red-500">{errors.title.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-gray-700">Author</label>
                    <input
                        type="text"
                        id="author"
                        {...register('author')}
                        className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    {errors.author && <p className="mt-1 text-red-500">{errors.author.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="genre" className="block text-gray-700">Genre</label>
                    <input
                        type="text"
                        id="genre"
                        {...register('genre')}
                        className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    {errors.genre && <p className="mt-1 text-red-500">{errors.genre.message}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="publication_date" className="block text-gray-700">Publication Date</label>
                    <input
                        type="date"
                        id="publication_date"
                        {...register('publication_date')}
                        className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    {errors.publication_date && <p className="mt-1 text-red-500">{errors.publication_date.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 focus:outline-none focus:bg-primary trans"
                >
                    {updateLoading ? 'Loading' : 'Update Now'}
                </button>
            </form>
        </CardLayoutScreen>
    )
}

export default EditBook