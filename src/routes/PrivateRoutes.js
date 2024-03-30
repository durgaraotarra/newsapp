import React from 'react'
import { Categories, CategoryNews, Home, Layout, PageNotFound, Search } from '../pages';
import { getNewsByCategory } from "../pages/CategoryNews";
import { Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  return{
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/categories',
            element: <Categories /> 
        },
        {
            path: '/categories/:name',
            element: <CategoryNews />,
            loader: getNewsByCategory,
        },
        {
            path: '/search',
            element: <Search />
        }
    ]
  }
}

export default PrivateRoutes;
