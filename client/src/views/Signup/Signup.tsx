import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const Signup = () => {
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
                    <h2 className="text-2xl font-semibold text-center">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                {...register('name')}
                                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-blue-500"
                            />
                            {errors.name && <p className="mt-1 text-red-500">{errors.name.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register('email')}
                                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-blue-500"
                            />
                            {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                {...register('password')}
                                className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-blue-500"
                            />
                            {errors.password && <p className="mt-1 text-red-500">{errors.password.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 focus:outline-none focus:bg-primary trans"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;