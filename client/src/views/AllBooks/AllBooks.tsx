import { useGetBooksQuery } from '../../redux/features/book/bookApi';
import { Link } from 'react-router-dom';
import { IBook, IGenre } from '../../config/types';
import BookCard from '../../components/BookCard/BookCard';
import { useEffect, useState } from 'react';
import { genres } from '../../config/constants';

const AllBooks = () => {
    // states
    const [searchValue, setSearchValue] = useState<string>('');
    const [datas, setDatas] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    // get roles from redux api
    const { data: books, isLoading, isError } = useGetBooksQuery({ limit: undefined, search: searchValue, isLatest: false });

    useEffect(() => {
        if (selectedGenres.length) {
            const filteredBooks = books?.data?.filter((item: IBook) => selectedGenres.includes(item.genre)) || [];
            setDatas(filteredBooks);
        } else {
            setDatas(books?.data)
        }
    }, [selectedGenres, books?.data]);

    // handle checkbox
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const genre = e.target.value;
        if (e.target.checked) {
            setSelectedGenres((prevSelectedGenres) => [...prevSelectedGenres, genre]);
        } else {
            setSelectedGenres((prevSelectedGenres) => prevSelectedGenres.filter((g) => g !== genre));
        }
    };
    if (isError) {
        return <>Error</>;
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

            {isLoading ? <div className='flex justify-center my-6'>Loading...</div> : (
                <div className='grid grid-cols-4'>
                    <div className='mt-5 flex flex-col gap-2 relative'>
                        {genres.map((item: IGenre, index: number) => (
                            <div key={item._id}>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="appearance-none cursor-pointer w-6 h-6 border border-primary-300 rounded-md checked:bg-primary checked:border-primary focus:outline-none"
                                        checked={selectedGenres.includes(item.genre)}
                                        onChange={handleCheckboxChange}
                                        value={item.genre}
                                    />
                                    {selectedGenres.includes(item.genre) && <span className='absolute left-[-1px] text-white'>&#x2713;</span>}
                                    <span className="text-primary">{item.genre}</span>
                                </label>
                            </div>
                        ))}
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
                            {datas?.map((item: IBook) => <BookCard key={item._id} item={item} />)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AllBooks;
