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
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;