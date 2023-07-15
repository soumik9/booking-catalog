import BookCard from '../../components/BookCard/BookCard'
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from '../../redux/features/book/bookApi';
import { IBook } from '../../config/types';

const Home = () => {

    // get roles from redux api
    const { data: books, isLoading, isError } = useGetBooksQuery(undefined);

    if (isError) {
        return <>Error</>
    }

    return (
        <div className='container'>

            <div className="mt-6 flex justify-end my-4">
                <Link to="/add-new-book">
                    <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 trans focus:outline-none">
                        Add New Book
                    </button>
                </Link>
            </div>

            {isLoading ? <>Loading...</> : <div className='grid grid-cols-4 gap-x-[20px] gap-y-[30px]'>
                {books?.data.map((item: IBook) => <BookCard key={item._id} item={item} />)}
            </div>}


        </div>
    )
}

export default Home