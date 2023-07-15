import BookCard from '../../components/BookCard/BookCard'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>

            <div className="mt-6 flex justify-end my-4">
                <Link to="/add-new-book">
                    <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 trans focus:outline-none">
                        Add New Book
                    </button>
                </Link>
            </div>

            <div className='grid grid-cols-4 gap-[20px]'>
                <BookCard />
            </div>

        </div>
    )
}

export default Home