import React from 'react';
import { FaFrown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-center text-secondary mt-5 '><FaFrown className='text-warning'></FaFrown> 404 Error page</h1>
            <h1 className='text-center text-secondary  '>Sorry , This page does not exists</h1>
            <NavLink to='/'><h3 className='text-center text-secondary  '>Back to Home</h3></NavLink>
        </div>
    );
};

export default ErrorPage;