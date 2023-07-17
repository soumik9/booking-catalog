import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCreateBookMutation } from '../../redux/features/book/bookApi';
import CardLayoutScreen from '../../components/CardLayout/CardLayoutScreen';

const validationSchema = yup.object().shape({
    title: yup.string().required('Email is required'),
    author: yup.string().required('Password is required'),
    genre: yup.string().required('Password is required'),
    publication_date: yup.string().required('Password is required'),
});

const AddNewBook = () => {

    // global
    const [createBook, { isLoading }] = useCreateBookMutation();

    // use hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    // submit
    const onSubmit = (data: any) => {
        createBook(data);
        reset();
    };

    return (
        <CardLayoutScreen title='Add New Book'>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
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
                    {isLoading ? 'Loadiing' : 'Add Now'}
                </button>
            </form>
        </CardLayoutScreen>
    )
}

export default AddNewBook