import React, { FC } from 'react';

interface IPrewiewBlockProps {
    preview: string | null
    filename: string
}

const PreviewBlock: FC<IPrewiewBlockProps> = ({ filename, preview }) => {
    return (
        <div className="flex-1 flex flex-col">
            {preview
                ? <div className="w-[180px] h-[100px] md:w-[304px] md:h-[170px]">
                    <img src={preview} alt="preview" className="w-full h-full shrink-0" />
                </div>
                : <div className="bg-lightGray w-[180px] h-[100px] md:w-[304px] md:h-[170px] flex items-center justify-center">
                    Upload thumbnail...
                </div>}

            <div className="text-myGray text-[12px] mt-2">Filename:</div>
            <p className="line-clamp-1 max-w-[250px]">
                {filename}
            </p>
        </div>
    );
};

export default PreviewBlock;