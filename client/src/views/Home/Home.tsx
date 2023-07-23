import BookCard from '../../components/BookCard/BookCard'
import { useGetBooksQuery } from '../../redux/features/book/bookApi';
import { IBook } from '../../config/types';
import BodyHead from './components/BodyHead';

const Home = () => {

    // get books from redux api
    const { data: books, isLoading, isError } = useGetBooksQuery({ limit: 10, search: undefined, isLatest: true });

    if (isError) {
        return <>Error</>
    }

    return (
        <div className='container'>

            <BodyHead
                totalLength={books?.data?.length}
                showingLength={books?.meta?.total ? books?.meta?.total : 0}
                title='Top 10 Latest Books'
            />

            {isLoading ? <div className='flex justify-center my-6'>Loading...</div> : <div className='grid md:grid-cols-2 lg:grid-cols-3 xll:grid-cols-4 gap-x-[20px] gap-y-[35px] mt-6'>
                {books?.data?.map((item: IBook) => <BookCard key={item._id} item={item} />)}
            </div>}
        </div>
    )
}

export default Home