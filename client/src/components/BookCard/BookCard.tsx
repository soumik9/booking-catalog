import { IBook } from '../../config/types'
import { Link } from 'react-router-dom';

const BookCard = ({ item }: { item: IBook }) => {
    return (
        <Link to={`/book/${item._id}`} className="bg-white shadow-lg rounded-lg overflow-hidden" >
            <div className="px-6 pt-2 pb-4">
                <h3 className="text-[20px] font-semibold text-gray-800 mb-2 w-[90%] truncate">{item.title}</h3>
                <p className="text-sm text-gray-600">By {item.author}</p>
                <p className="text-sm text-gray-600 mt-1">Publication Date: {item.publication_date}</p>
                <p className="text-sm text-gray-600 mt-1">Genre: {item.genre}</p>

                <div className="mt-6 flex justify-end">
                    <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 trans focus:outline-none">
                        View More
                    </button>
                </div>
            </div>
        </Link >
    )
}

export default BookCard