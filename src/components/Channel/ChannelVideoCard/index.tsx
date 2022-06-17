import React from 'react';

const ChannelVideoCard = () => {
    return (
        <div className="flex flex-col gap-3 overflow-hidden active:bg-lightGray px-1 cursor-pointer pt-1">
            <img src="https://i.ytimg.com/vi/GNrdg3PzpJQ/maxresdefault.jpg" alt="preview" className="w-full h-full" />

            <div className="">
                <div className="">
                    <h4 className="line-clamp-2 truncate font-medium whitespace-normal">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed voluptatem tempore doloremque doloribus nemo quasi qui eum delectus, ea placeat.
                    </h4>
                    <ul className="text-myGray text-[13px] mt-2 leading-6">
                        <li className="">217k views</li>
                        <li className="">10 hours ago</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChannelVideoCard;