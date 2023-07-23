import { Link } from 'react-router-dom'

interface Props {
    totalLength: number;
    showingLength: number;
    title: string;
}

const BodyHead = ({ totalLength, showingLength, title }: Props) => {
    return (
        <>
            <div className="mt-6 flex items-center justify-between my-6">
                <div>
                    <p>Showing total result: {totalLength} of {showingLength}</p>
                </div>

                <Link to="/add-new-book">
                    <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 trans focus:outline-none">
                        Add New Book
                    </button>
                </Link>
            </div>

            <h1 className='text-[28px] text-center mb-1 text-primary font-semibold'>{title}</h1>
            <hr />
        </>

    )
}

export default BodyHead