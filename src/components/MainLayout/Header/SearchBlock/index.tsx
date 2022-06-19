import React from 'react';
import { SearchIcon } from '../../../../assets/icons';

const SearchBlock = () => {
    return (
        <div className="flex-grow w-full max-w-[600px] mx-auto">
            <form action="" className="flex items-center h-11">
                <input type="text" placeholder='Search request...'
                    className='w-full grayInput h-11 px-2 ' />
                <button type="submit" className='border border-gray-300 h-full bg-white border-l-0 px-4 hover:bg-gray-200 transition-colors'>
                    <SearchIcon className='w-5 h-5' />
                </button>
            </form>
        </div>
    );
};

export default SearchBlock;