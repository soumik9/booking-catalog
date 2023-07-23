import { useEffect, useState } from "react";
import { useAppSelector } from "../../../config/helpers";
import { useCreateReviewMutation } from "../../../redux/features/review/reviewApi";

interface Props {
    bookId: string | undefined;
}

const ReviewBox = ({ bookId }: Props) => {

    // global
    const auth = useAppSelector((state) => state.auth);
    const [createReview, { isLoading, isSuccess }] = useCreateReviewMutation();

    // states
    const [review, setReview] = useState('');

    useEffect(() => {
        if (isSuccess) {
            setReview('');
        }
    }, [isSuccess])

    // handler
    const handleReview = () => {
        createReview({
            user: auth._id,
            book: bookId,
            desc: review
        })
    }

    return (
        <div className='mt-5'>
            <div className="mb-4">
                <label htmlFor="review" className="block text-gray-700">
                    Submit a review
                </label>
                <textarea
                    id="review"
                    className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary resize-none"
                    rows={4}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                />
            </div>

            <div className='flex justify-end'>
                <button
                    type="button"
                    className="w-[150px] px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 focus:outline-none focus:bg-primary disabled:bg-primary-200 disabled:cursor-not-allowed trans"
                    disabled={!review}
                    onClick={handleReview}
                >
                    {isLoading ? 'Submitting' : 'Submit'}
                </button>
            </div>

        </div>
    )
}

export default ReviewBox