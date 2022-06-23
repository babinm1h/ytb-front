import React, { useEffect } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';
import StudioVideosList from '../../../components/Studio/StudioVideosList';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { fetchStudioVideos } from '../../../redux/thunks/studio.thunks';

const StudioContent = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchStudioVideos())
    }, [])

    return (
        <>
            <MainLayout>
                <ul className="flex items-center gap-5 px-5 py-3 text-myGray font-medium">
                    <li className="max-w-[350px] w-full min-w-[120px]">Video</li>
                    <li className="videoStat">Visibility</li>
                    <li className="videoStat">Date</li>
                    <li className="videoStat">Views</li>
                    <li className="videoStat">Likes</li>
                </ul>
                <StudioVideosList />
            </MainLayout>
        </>
    );
};

export default StudioContent;