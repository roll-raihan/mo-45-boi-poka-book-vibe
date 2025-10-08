import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../Home/Home';
import ListedBook from '../pages/ListedBook/ListedBook';
import PageToRead from '../pages/PageToRead/PageToRead';
import BookDetails from '../BookDetails/BookDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch("booksData.json"),
                path: "/",
                Component: Home,
            },
            {
                path: "/listedBook",
                loader: () => fetch("booksData.json"),
                Component: ListedBook,
            },
            {
                path: "/pagesToRead",
                Component: PageToRead,
            },
            {
                path: '/bookDetails/:id',
                loader: () => fetch("booksData.json"),
                Component: BookDetails,
            }
        ]
    },
]);