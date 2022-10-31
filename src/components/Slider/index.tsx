// import React, { FC, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import VideoCard from '../VideoCard';
// import { Navigation } from 'swiper';
// import './slider.scss'
// import { IVideo } from '../../types/models/video.types';
// import ChannelVideoCard from '../Channel/ChannelVideoCard';

// interface ISliderProps {
//     videos: IVideo[]
//     channelSlider?: boolean
// }

// const Slider: FC<ISliderProps> = ({ videos, channelSlider }) => {

//     return (
//         <Swiper
//             modules={[Navigation]}
//             navigation={{}}
//             onAfterInit={(sw) => sw.activeIndex = 0}
//             initialSlide={0}
//             slidesPerView={4}
//             spaceBetween={12}
//         >
//             {videos.map(v => <SwiperSlide key={v._id}>
//                 {channelSlider ? <ChannelVideoCard video={v} /> : <VideoCard video={v} />}
//             </SwiperSlide>)}

//         </Swiper>
//     );
// };

// export default Slider;
import React from "react";

const Slider = () => {
  return <div></div>;
};

export default Slider;
