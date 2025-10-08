import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ListedBook = () => {

    const data = useLoaderData();
    // console.log(data)
    const [readList, setReadList] = useState([]);
    useEffect(() => {
        const storeBookData = getStoreBook();
        const convertedStoredBook = storeBookData.map(id => parseInt(id));
        // console.log(convertedStoredBook);
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        // console.log(myReadList)
        setReadList(myReadList);
    }, [])


    const [sort, setSort] = useState("");
    const handleSort = (type) => {
        setSort(type);
    }

    return (
        <div className='mt-5'>
            <h1 className='text-2xl font-bold text-center rounded-2xl p-5 bg-gray-200'>Books</h1>

            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1 btn-success">Sort By : {sort ? sort : ""} ⬇️</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("Pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("Rating")}>Rating</a></li>
                </ul>
            </div>

            <div className='mt-5'>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='font-bold'>Books I Read: {readList.length}</h2>
                        <div className='mt-5 mb-5 flex flex-col gap-5'>
                            {
                                readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>My Wishlist Books</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBook;