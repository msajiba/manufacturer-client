import React from 'react';
import { FaSearch } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <FaSearch className=' text-6xl text-red-500 ' />
            <h3 className='text-2xl text-red-500'> Not Found ! <span className=''> 404 </span> </h3>
        </div>
    );
};

export default NotFound;