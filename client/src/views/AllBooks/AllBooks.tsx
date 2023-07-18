import { useGetBooksQuery } from '../../redux/features/book/bookApi';
import { Link } from 'react-router-dom';
import { IBook } from '../../config/types';
import BookCard from '../../components/BookCard/BookCard';
import { useState } from 'react';

const AllBooks = () => {

    // states
    const [searchValue, setSearchValue] = useState<string>('');

    // get roles from redux api
    const { data: books, isLoading, isError } = useGetBooksQuery({ limit: undefined, search: searchValue });

    if (isError) {
        return <>Error</>
    }

    return (
        <div className='container'>

            <div className="mt-6 flex justify-between my-6">
                <div>
                    <p>Showing total result: {books?.data?.length} of {books?.meta?.total ? books?.meta?.total : '0'}</p>
                </div>

                <Link to="/add-new-book">
                    <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 trans focus:outline-none">
                        Add New Book
                    </button>
                </Link>
            </div>

            <h1 className='text-[28px] text-center mb-1 text-primary font-semibold'>All Books Showcase</h1>
            <hr />

            {isLoading ? <div className='flex justify-center my-6'>Loading...</div> : <div className='grid grid-cols-4'>

                <div>

                </div>

                <div className='col-span-3'>
                    <input
                        type="text"
                        id="search"
                        className="w-full px-4 py-2 my-4 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-right"
                        placeholder='search book by author || genre || title'
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <div className='grid grid-cols-3 gap-x-[20px] gap-y-[30px] mt-6 pb-10'>
                        {books?.data.map((item: IBook) => <BookCard key={item._id} item={item} />)}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default AllBooks