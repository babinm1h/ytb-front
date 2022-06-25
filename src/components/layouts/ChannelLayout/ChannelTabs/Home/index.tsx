import React, { FC } from "react"
import { IVideo } from "../../../../../types/models/video.types"
import Slider from "../../../../Slider"
import VideosList from "../../../../VideosList"

interface IChannelHomeProps {
  popularVideos: IVideo[]
}

const ChannelHome: FC<IChannelHomeProps> = ({ popularVideos }) => {
  return (
    <section className="py-7 border-b border-gray-300">
      <h2 className="sectionTitle">Popular videos</h2>
      <div className="hidden sm:block">
        <Slider videos={popularVideos} channelSlider={true} />
      </div>
      <div className="sm:hidden">
        <VideosList videos={popularVideos} />
      </div>
    </section>
  )
}

export default ChannelHome
