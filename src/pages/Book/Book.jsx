import React from 'react';

const Book = ({ singleBook }) => {
    const { bookName, author, image } = singleBook;

    return (
        <div className="card bg-base-100 max-w-[375px] max-h-[482px] shadow-sm p-2 border">
            <figure  className='max-w-[320px] max-h-[230px]'>
                <img className='max-w-[135px] max-h-[165px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fiction</div>
                    <div className="badge badge-outline">5.00</div>
                </div>
            </div>
        </div>
    );
};

export default Book;