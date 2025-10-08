import React from 'react';
import bookImg from '../../assets/books.jpg'


const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-2xl mt-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bookImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A]">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;