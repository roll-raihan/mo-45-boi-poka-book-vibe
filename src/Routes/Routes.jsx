import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../Home/Home';
import ListedBook from '../pages/ListedBook/ListedBook';
import PageToRead from '../pages/PageToRead/PageToRead';

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
                Component: ListedBook,
            },
            {
                path: "/pagesToRead",
                Component: PageToRead,
            }
        ]
    },
]);