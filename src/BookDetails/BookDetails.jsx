import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import { addToStoreDB } from '../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    // console.log(typeof id);
    const bookId = parseInt(id);
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book => book.bookId === bookId);
    // console.log(singleBook);
    const { bookName, image, author, publisher, rating, category, tags, totalPages, yearOfPublishing, review } = singleBook;

    const handleMarkAsRead = id => {
        // store with id
        // where to store
        // array or collection
        // if data is already stored then alert
        // if not then push the array or collection

        addToStoreDB(id);
    }

    return (
        <div className='flex flex-col md:flex-row m-5 gap-5'>
            <div className='flex-1 p-12 bg-pink-100 rounded-2xl'>
                <img className='w-[400px] h-[500px] mx-auto' src={image} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h1 className='text-3xl font-bold  mb-2'>{bookName}</h1>
                <p className='mb-3 font-bold'>By: {author}</p>
                <div className='border-t-1'></div>
                <p className='mt-2 mb-2'>{category}</p>
                <div className='border-t-1'></div>
                <p className='mt-2 mb-3'><span className='font-bold'>Review: </span>{review}</p>
                <div className='flex gap-5 mt-2 mb-4 items-center'>
                    <span className='font-bold'>Tag:</span>
                    {
                        tags.map((tag, index) => <button key={index} className='rounded-2xl p-2 text-green-500 border-green-500 border'>{tag}</button>)
                    }
                </div>
                <div className='border-t-1'></div>
                <div className='flex gap-10 mt-3'>
                    <p>Number of Pages:</p>
                    <p className='font-bold'>{totalPages}</p>
                </div>
                <div className='flex gap-24.5 mt-3'>
                    <p>Publisher:</p>
                    <p className='font-bold'>{publisher}</p>
                </div>
                <div className='flex gap-9 mt-3'>
                    <p>Year of Publishing:</p>
                    <p className='font-bold'>{yearOfPublishing}</p>
                </div>
                <div className='flex gap-29 mt-3'>
                    <p>Rating:</p>
                    <p className='font-bold'>{rating}</p>
                </div>
                <div className='flex gap-5 mt-2'>
                    <button onClick={() => handleMarkAsRead(id)} className='btn btn-neutral'>Mark As Read</button>
                    <button className='btn btn-primary'>Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;