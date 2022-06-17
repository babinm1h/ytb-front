import React from 'react';
import ChannelVideoCard from '../components/Channel/ChannelVideoCard';
import MainVideo from '../components/Channel/MainVideo';
import MainLayout from '../components/MainLayout';

const Channel = () => {
    return (
        <MainLayout>
            <div className="px-5">
                <div className="w-full h-[200px]">
                    <img src="https://i.ytimg.com/vi/Od5H_CiU2vM/maxresdefault.jpg" alt="wallpaper"
                        className="object-cover w-full h-full" />
                </div>

                <div className="flex items-center mt-5 gap-5">
                    <div className="w-20 h-20 rounded-[50%]">
                        <img src="https://i.ytimg.com/vi/Od5H_CiU2vM/maxresdefault.jpg" alt="wallpaper"
                            className="object-cover w-full h-full rounded-[50%]" />
                    </div>
                    <div className="">
                        <h2 className="font-medium text-2xl">Talents CS:GO</h2>
                        <div className="text-myGray text-[16px]">37k subscribers</div>
                    </div>
                </div>

                <MainVideo />

                <div className="flex items-center gap-5 py-7 border-b border-gray-300">
                    <ChannelVideoCard />
                    <ChannelVideoCard />
                    <ChannelVideoCard />
                    <ChannelVideoCard />
                    <ChannelVideoCard />
                </div>
            </div>
        </MainLayout>
    );
};

export default Channel;