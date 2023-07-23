import { IBook } from '../../config/types'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useAppSelector } from '../../config/helpers';
import { GiSelfLove } from 'react-icons/gi';
import { useCreateWishlistMutation } from '../../redux/features/wishlist/wishlistApi';
import { AiOutlineLoading } from 'react-icons/ai';

const BookCard = ({ item }: { item: IBook }) => {

    // global
    const auth = useAppSelector((state) => state.auth);
    const [createWishlist, { isLoading }] = useCreateWishlistMutation();

    // handler
    const handleWishlist = (event: any) => {
        event.preventDefault();
        createWishlist({
            user: auth._id,
            book: item._id,
        })
    }

    return (
        <Link to={`/book/${item._id}`} className="bg-white shadow-lg rounded-lg overflow-hidden" >
            <div className="px-6 pt-2 pb-4">
                <h3 className="text-[20px] font-semibold text-gray-800 mb-2 w-[90%] truncate">{item.title}</h3>
                <p className="text-sm text-gray-600">By {item.author}</p>
                <p className="text-sm text-gray-600 mt-1">Publication Date: {item.publication_date}</p>
                <p className="text-sm text-gray-600 mt-1">Genre: {item.genre}</p>

                <div className="mt-6 flex justify-end">
                    <Button
                        text={isLoading ? <AiOutlineLoading /> : <GiSelfLove />}
                        disabled={!auth.isAuthenticated}
                        onClick={(event) => handleWishlist(event)}
                        type='button'
                    />
                </div>
            </div>
        </Link>
    )
}

export default BookCard