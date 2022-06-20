import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ChannelLayout from '../components/layouts/ChannelLayout';
import ChannelAbout from '../components/layouts/ChannelLayout/ChannelTabs/About';
import ChannelHome from '../components/layouts/ChannelLayout/ChannelTabs/Home';
import ChannelVideos from '../components/layouts/ChannelLayout/ChannelTabs/Videos';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { resetChannelPage } from '../redux/slices/channelPage.slice';
import { fetchChannelPopularVideos, fetchChannelVideos, fetchProfile } from '../redux/thunks/channelPage.thunks';

export enum ChannelTabs {
    home = 'home',
    videos = 'videos',
    about = 'about'
}

const Channel = () => {
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()
    const { id } = useParams() as { id: string }

    const { popularVideos, isLoading, user } = useAppSelector(state => state.channelPage)
    const [activeTab, setActiveTab] = useState<ChannelTabs>(ChannelTabs.home)

    useEffect(() => {
        if (id) {
            dispatch(fetchChannelPopularVideos(id))
            dispatch(fetchProfile(id))
            dispatch(fetchChannelVideos(id))
        }
        return () => {
            dispatch(resetChannelPage())
        }
    }, [id])


    useEffect(() => {
        const path = pathname.split('/').pop();
        if (!path) return;
        if (path === ChannelTabs.videos) setActiveTab(ChannelTabs.videos)
        if (path === ChannelTabs.about) setActiveTab(ChannelTabs.about)
        if (path === ChannelTabs.home) setActiveTab(ChannelTabs.home)
    }, [pathname])

    if (!user || isLoading) return <div>load</div>

    return (
        <ChannelLayout user={user}>
            {activeTab === ChannelTabs.home
                ? popularVideos.length > 0
                    ? <ChannelHome popularVideos={popularVideos} />
                    : <h3 className='text-gray-500 text-xl text-center py-5'>
                        This channel doesn't have any content
                    </h3>

                : activeTab === ChannelTabs.videos
                    ? <ChannelVideos />
                    : <ChannelAbout owner={user} />}
        </ChannelLayout>
    );
};

export default Channel;