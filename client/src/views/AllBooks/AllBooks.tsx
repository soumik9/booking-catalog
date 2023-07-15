import React from 'react'
import { useGetBooksQuery } from '../../redux/features/book/bookApi';
import { Link } from 'react-router-dom';
import { IBook } from '../../config/types';
import BookCard from '../../components/BookCard/BookCard';

const AllBooks = () => {

    // get roles from redux api
    const { data: books, isLoading, isError } = useGetBooksQuery(undefined);

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

            <hr />

            {isLoading ? <div className='flex justify-center my-6'>Loading...</div> : <div className='grid grid-cols-4 gap-x-[20px] gap-y-[30px] mt-6'>
                {books?.data.map((item: IBook) => <BookCard key={item._id} item={item} />)}
            </div>}
        </div>
    )
}

export default AllBooks