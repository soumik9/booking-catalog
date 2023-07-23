import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../config/helpers';
import classNames from 'classnames';

interface Props {
    totalLength: number;
    showingLength: number;
    title: string;
}

const BodyHead = ({ totalLength, showingLength, title }: Props) => {

    // global
    const auth = useAppSelector((state) => state.auth);

    return (
        <>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between my-6">
                <div className='mb-2 md:mb-0'>
                    <p>Showing total result: {totalLength} of {showingLength}</p>
                </div>

                <Link to="/add-new-book">
                    <button
                        className={classNames(
                            "px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 trans focus:outline-none disabled:bg-primary-200 disabled:cursor-not-allowed",
                        )}
                        disabled={!auth.isAuthenticated}
                    >
                        {auth.isAuthenticated ? 'Add New Book' : 'Please Login'}
                    </button>
                </Link>
            </div>

            <h1 className='text-[28px] text-center mb-1 text-primary font-semibold'>{title}</h1>
            <hr />
        </>

    )
}

export default BodyHead