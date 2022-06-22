import React, { Fragment, } from 'react'
import { VideoPlus } from '../../../../../../assets/icons'
import { useModal } from '../../../../../../hooks/useModal'
import UploadVideoForm from '../../../../../UI/forms/UploadVideoForm'

const UploadModal = () => {
    const { isOpen, onClose, onOpen } = useModal()

    return (
        <>
            <button className="border border-transparent active:border-gray-200 w-10 h-10 rounded-[50%] active:bg-lightGray p-1 flex items-center justify-center transition-all" onClick={onOpen}>
                <VideoPlus className='w-10 h-10' />
            </button>

            {isOpen && <div className="bg-black bg-opacity-50 inset-0 fixed z-[5] w-full h-full items-center justify-center flex">
                <div className="rounded-lg bg-white w-full max-w-[850px] h-full max-h-[600px]">
                    <UploadVideoForm isOpen={isOpen} onClose={onClose} />
                </div>
            </div>}
        </>
    )
}

export default UploadModal;