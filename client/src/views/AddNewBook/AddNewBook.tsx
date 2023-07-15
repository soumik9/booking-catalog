import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    title: yup.string().required('Email is required'),
    author: yup.string().required('Password is required'),
    genre: yup.string().required('Password is required'),
    publication_date: yup.string().required('Password is required'),
});

const AddNewBook = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className='container'>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-center">Add New Book</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700">Title</label>
                            <input
                                type="text"
                                id="title"
                                {...register('title')}
                                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-blue-500"
                            />
                            {errors.title && <p className="mt-1 text-red-500">{errors.title.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="author" className="block text-gray-700">Author</label>
                            <input
                                type="text"
                                id="author"
                                {...register('author')}
                                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-blue-500"
                            />
                            {errors.author && <p className="mt-1 text-red-500">{errors.author.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="genre" className="block text-gray-700">Genre</label>
                            <input
                                type="text"
                                id="genre"
                                {...register('genre')}
                                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-blue-500"
                            />
                            {errors.genre && <p className="mt-1 text-red-500">{errors.genre.message}</p>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="publication_date" className="block text-gray-700">Publication Date</label>
                            <input
                                type="date"
                                id="publication_date"
                                {...register('publication_date')}
                                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-blue-500"
                            />
                            {errors.publication_date && <p className="mt-1 text-red-500">{errors.publication_date.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 focus:outline-none focus:bg-primary trans"
                        >
                            Add Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNewBook