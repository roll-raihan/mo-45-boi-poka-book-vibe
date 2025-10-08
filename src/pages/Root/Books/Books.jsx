import { Suspense } from 'react';
import Book from '../../Book/Book';

const Books = ({ data }) => {

    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data)
    //         })
    // }, [])


    return (
        <div className='mt-5 mb-5'>
            <h1 className='font-bold text-2xl text-center m-5'>Books</h1>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;