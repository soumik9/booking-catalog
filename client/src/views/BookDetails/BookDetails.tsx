import { useParams } from 'react-router-dom';
import { useDeleteBookMutation, useGetBookQuery } from '../../redux/features/book/bookApi';
import { Link } from 'react-router-dom';
import useDelete from '../../config/hooks/useDelete';
import ReviewBox from './components/ReviewBox';
import Reviews from './components/Reviews';
import { useAppSelector } from '../../config/helpers';
import Button from '../../components/Button/Button';

const BookDetails = () => {

    const { bookId } = useParams();

    // hooks
    const { sendDeleteRequest } = useDelete();
    const auth = useAppSelector((state) => state.auth);

    // get books from redux api
    const { data: book, isLoading, isError } = useGetBookQuery(bookId);
    const [deleteBook, { isLoading: deleteLoading, isSuccess }] = useDeleteBookMutation(undefined);

    // loading || error
    if (isLoading) {
        return <div className='f-center'>Loading...</div>
    }
    if (isError) {
        return <div className='f-center'>Error...</div>
    }

    return (
        <div className='container mt-20'>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 pt-2 pb-4">
                    <h3 className="text-[20px] font-semibold text-gray-800 mb-2 w-[90%] truncate">{book?.data?.title}</h3>
                    <p className="text-sm text-gray-600">By {book?.data?.author}</p>
                    <p className="text-sm text-gray-600 mt-1">Publication Date: {book?.data?.publication_date}</p>
                    <p className="text-sm text-gray-600 mt-1">Genre: {book?.data?.genre}</p>

                    <div className="mt-6 flex gap-4 justify-end">
                        <Link to={`/edit-book/${book?.data?._id}`}>
                            <Button
                                disabled={!auth.isAuthenticated}
                                text={auth.isAuthenticated ? 'Edit' : 'Please Login'}
                            />
                        </Link>


                        <Button
                            disabled={!auth.isAuthenticated}
                            text={auth.isAuthenticated ? deleteLoading ? 'Deleting' : 'Delete' : 'Please Login'}
                            onClick={() => sendDeleteRequest(book?.data?._id, deleteBook, isSuccess)}
                            classes='!bg-error hover:!bg-error-hover disabled:!bg-gray-300'
                        />
                    </div>
                </div>
            </div>

            <Reviews reviews={book?.data?.reviews} />

            {auth.isAuthenticated && <ReviewBox bookId={bookId} />}

        </div>
    )
}

export default BookDetails