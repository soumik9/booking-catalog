import BookCard from '../../components/BookCard/BookCard'
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from '../../redux/features/book/bookApi';
import { IBook } from '../../config/types';

const Home = () => {

    // get books from redux api
    const { data: books, isLoading, isError } = useGetBooksQuery({ limit: 10, search: undefined, isLatest: true });

    if (isError) {
        return <>Error</>
    }

    return (
        <div className='container'>

            <div className="mt-6 flex items-center justify-between my-6">
                <div>
                    <p>Showing total result: {books?.data?.length} of {books?.meta?.total ? books?.meta?.total : '0'}</p>
                </div>

                <Link to="/add-new-book">
                    <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 trans focus:outline-none">
                        Add New Book
                    </button>
                </Link>
            </div>

            <h1 className='text-[28px] text-center mb-1 text-primary font-semibold'>Top 10 Latest Books</h1>
            <hr />

            {isLoading ? <div className='flex justify-center my-6'>Loading...</div> : <div className='grid md:grid-cols-2 lg:grid-cols-3 xll:grid-cols-4 gap-x-[20px] gap-y-[35px] mt-6'>
                {books?.data?.map((item: IBook) => <BookCard key={item._id} item={item} />)}
            </div>}
        </div>
    )
}

export default Home