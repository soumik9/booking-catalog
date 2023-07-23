import classNames from "classnames";

type Props = {
    reviews: any | undefined;
}

const Reviews = ({ reviews }: Props) => {

    return (
        <div className='bg-white shadow-lg rounded-lg overflow-hidden mt-5'>
            <div className="px-6 pt-2 pb-4">
                <h4 className='text-primary'>Reviews</h4>
                <hr />

                <div className='mt-4'>
                    {reviews.length ? reviews.map((item: any, index: number) => <div
                        className={classNames(
                            "flex items-center gap-3 my-2 ",
                            index < reviews.length - 1 && 'border-b border-primary'
                        )}
                        key={item._id}
                    >
                        <img src="/av.jpg" width={40} alt="" />

                        <div className="mb-1">
                            <p>{item?.user?.name}</p>
                            <p>{item?.desc}</p>
                        </div>
                    </div>) : <div className="f-center text-error">No Reviews</div>}

                </div>
            </div>
        </div>
    )
}

export default Reviews