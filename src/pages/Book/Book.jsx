import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    const { bookName, bookId, author, image, category, rating, tags, yearOfPublishing } = singleBook;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-3 border
        ">
                <figure className='w-full rounded-xl mx-auto bg-gray-300 p-4'>
                    <img className='h-[165px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className='flex justify-stretch gap-10 mt-2 -mb-3 ml-6'>
                    {
                        tags.map((tag, index) => <button key={index} className='rounded-2xl p-2 text-green-500 border-green-500 border'>{tag}</button>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">({yearOfPublishing})</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className='border-t-1 border-dashed'></div>
                    <div className="card-actions justify-between mt-2 -mb-5">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;