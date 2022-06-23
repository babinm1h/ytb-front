import { useCallback, useEffect, useRef } from 'react';
import Slider from '../components/Slider';
import MainLayout from '../components/layouts/MainLayout';
import VideosList from '../components/VideosList';
import { fetchAllVideos, fetchPopularUsers, fetchPopularVideos } from '../redux/thunks/videos.thunks';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import ChannelsList from '../components/ChannelsList';
import { useScrollPagination } from '../hooks/useScrollPagination';
import VideoSkeletonList from '../components/Loaders/VideoSkeletonList';
import useScroll from '../hooks/useScroll';
import { incrCurrentPage } from '../redux/slices/videos.slice';

const Home = () => {
    const parentRef = useRef(null)
    const childRef = useRef(null)

    const dispatch = useAppDispatch()
    const { isLoading, videos, popularVideos, popularUsers, isUsersLoading, currentPage, totalCount } = useAppSelector(state => state.videos)


    useEffect(() => {
        dispatch(fetchPopularVideos())
        dispatch(fetchPopularUsers())
    }, [dispatch])

    const cb = useCallback(() => dispatch(fetchAllVideos(currentPage)).then(() => dispatch(incrCurrentPage())), [])

    // const scrollPagination = useScrollPagination(videos.length, currentPage, totalCount)

    const scr = useScroll(parentRef, childRef, cb)

    return (
        <>
            <MainLayout>
                <div className="w-full h-full overflow-auto" ref={parentRef}>
                    <section className="p-5 border-b border-gray-300">
                        <h2 className="sectionTitle">Popular Channels</h2>
                        {popularUsers.length > 0 && <ChannelsList users={popularUsers} isLoading={isUsersLoading} />}
                    </section>

                    <section className="hidden sm:block p-5 border-b border-gray-300">
                        <h2 className="sectionTitle">Popular Videos</h2>
                        <Slider videos={popularVideos} />
                    </section>

                    <section className="p-5">
                        <h2 className="sectionTitle">Recommended</h2>
                        <VideosList videos={videos} />
                        {isLoading && <VideoSkeletonList />}
                    </section>
                    <div ref={childRef}></div>
                </div>

            </MainLayout>
        </>
    );
};

export default Home;