import React, { FC } from 'react';
import { IVideo } from '../../../../../types/models/video.types';
import Slider from '../../../../Slider';

interface IChannelHomeProps { popularVideos: IVideo[] }

const ChannelHome: FC<IChannelHomeProps> = ({ popularVideos }) => {
    return (
        <section className="py-7 border-b border-gray-300">
            <h2 className="sectionTitle">Popular videos</h2>
            <Slider videos={popularVideos} channelSlider={true} />
        </section>
    );
};

export default ChannelHome;