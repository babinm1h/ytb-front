import React, { useEffect, useState } from 'react';
import { SearchIcon } from '../../../../../assets/icons';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { useDebounce } from '../../../../../hooks/useDebounce';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import { searchVideos } from '../../../../../redux/thunks/videos.thunks';
import SearchPopup from './SearchPopup';

const SearchBlock = () => {
    const dispatch = useAppDispatch()
    const { searchedVideos, isSearching } = useAppSelector(state => state.videos)

    const [searchTerm, setSearchTerm] = useState<string>('')
    const debValue = useDebounce(searchTerm, 700)
    const { isVisible, setIsVisible, ref } = useOutsideClick(false)

    const handleChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        if (searchTerm === '') return;
        dispatch(searchVideos(debValue))
    }, [debValue, dispatch])

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsVisible(true)
    }

    return (
        <div className="flex-grow w-full max-w-[600px] mx-auto hidden xs:block" ref={ref}>
            <form action="" className="flex items-center h-11 relative">
                <input type="text" placeholder='Search' onChange={handleChangeTerm}
                    className='w-full grayInput h-11 px-2 ' autoComplete='off' onFocus={handleFocus} />
                <button type="submit" className='border border-gray-300 h-full bg-white border-l-0 px-4 hover:bg-gray-200 transition-colors'>
                    <SearchIcon className='w-5 h-5' />
                </button>
                {isVisible && searchTerm.length > 0 && <SearchPopup videos={searchedVideos} isSearching={isSearching} />}
            </form>
        </div>
    );
};

export default SearchBlock;