import React from 'react';

const MainVideo = () => {
    return (
        <div className="border-b border-gray-300 py-7">
            <div className="flex gap-5">
                <div className="max-w-[400px] h-[220px] flex-shrink-0">
                    <img src="https://i.ytimg.com/vi/Od5H_CiU2vM/maxresdefault.jpg" alt="preview" className="object-contain w-full h-full" />
                </div>
                <div className="">
                    <h4 className='line-clamp-1 truncate whitespace-normal font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex fugiat enim optio rem reprehenderit ratione amet voluptatum consectetur quas.
                    </h4>
                    <div className="my-3 text-myGray flex items-center gap-4">
                        <span>177 999 views</span>
                        <span>1 year ago</span>
                    </div>
                    <p className="line-clamp-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, soluta magni, consequuntur illum assumenda explicabo ea dolores molestiae nostrum quae sapiente magnam officia dolorem earum laborum quaerat eius eos aliquid ad! Accusamus facere error voluptate excepturi nobis quisquam quis incidunt autem, maiores quod dicta perferendis hic ab nulla aperiam molestiae debitis quia expedita earum magni. Voluptatibus aliquam totam rem, cumque animi, laudantium neque et vel aliquid sapiente explicabo soluta quo autem vitae inventore. Nihil inventore necessitatibus vel.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainVideo;