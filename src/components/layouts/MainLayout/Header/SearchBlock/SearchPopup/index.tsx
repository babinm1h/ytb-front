import { FC, PropsWithChildren } from 'react';
import { IVideo } from '../../../../../../types/models/video.types';
import SearchedVideo from '../SearchedVideo';

interface ISearchPopupProps {
    videos: IVideo[]
    isSearching: boolean
}

const SearchPopup: FC<PropsWithChildren<ISearchPopupProps>> = ({ videos, isSearching }) => {
    return (
        <div className="bg-white shadow-popup absolute top-11 right-0 left-0 max-h-[400px] overflow-hidden overflow-y-scroll myScroll border-gray-200">
            <ul className="flex flex-col w-full">
                {isSearching
                    ? <div>load</div>
                    : videos.length > 0
                        ? videos.map(v => <SearchedVideo key={v._id} video={v} />)
                        : <h4 className='text-gray-500 font-medium text-lg text-center py-5'>
                            Videos not found...
                        </h4>}
            </ul>
        </div>
    );
};

export default SearchPopup;