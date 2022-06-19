import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Author from '../components/Channel/Author';
import MainVideo from '../components/Channel/MainVideo';
import MainLayout from '../components/MainLayout';
import Slider from '../components/Slider';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { resetChannelPage } from '../redux/slices/channelPage.slice';
import { fetchChannelPopularVideos, fetchProfile } from '../redux/thunks/channelPage.thunks';

const Channel = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams() as { id: string }
    const { popularVideos, isLoading, user } = useAppSelector(state => state.channelPage)

    useEffect(() => {
        if (id) {
            dispatch(fetchChannelPopularVideos(id))
            dispatch(fetchProfile(id))
        }
        return () => {
            dispatch(resetChannelPage())
        }
    }, [id])

    if (isLoading || !user) return <div>load</div>

    return (
        <MainLayout>
            <div className="px-10">
                <Author user={user} />

                <MainVideo />

                <section className="py-7 border-b border-gray-300">
                    <h2 className="sectionTitle">Popular videos</h2>
                    {popularVideos.length > 0
                        ? < Slider videos={popularVideos} channelSlider={true} />
                        : <h2 className='text-gray-500 text-xl text-center'>No videos yet</h2>}
                </section>
            </div>
        </MainLayout>
    );
};

export default Channel;