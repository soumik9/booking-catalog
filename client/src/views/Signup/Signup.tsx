import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignupMutation } from '../../redux/features/auth/authApi';
import { IUser } from '../../config/types';
import CardLayoutScreen from '../../components/CardLayout/CardLayoutScreen';

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const Signup = () => {

    // global
    const [signup, { isLoading }] = useSignupMutation();

    // hooks
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const handleSignup = (data: IUser) => {
        signup(data);
        reset();
    };

    return (
        <CardLayoutScreen title='Sign Up'>
            <form onSubmit={handleSubmit(handleSignup)} className="mt-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    {errors.name && <p className="mt-1 text-red-500">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password')}
                        className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    {errors.password && <p className="mt-1 text-red-500">{errors.password.message}</p>}
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 focus:outline-none focus:bg-primary trans"
                >
                    {isLoading ? 'Signing up' : 'Sign Up'}
                </button>
            </form>
        </CardLayoutScreen>
    );
};

export default Signup;