import React, { Fragment, } from 'react'
import { VideoPlus } from '../../../../../../assets/icons'
import { useModal } from '../../../../../../hooks/useModal'
import UploadVideoForm from '../../../../../UI/forms/UploadVideoForm'
import { motion, AnimatePresence } from "framer-motion";

const modalOverlay = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: { opacity: 0 },
  };
  
  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1 },
  };

const UploadModal = () => {
    const { isOpen, onClose, onOpen } = useModal()

    return (
        <>
            <button className="border border-transparent active:border-gray-200 w-10 h-10 rounded-[50%] active:bg-lightGray p-1 flex items-center justify-center transition-all" onClick={onOpen}>
                <VideoPlus className='w-10 h-10' />
            </button>

            <AnimatePresence exitBeforeEnter>
            {isOpen && <motion.div className="bg-black bg-opacity-50 inset-0 fixed z-[5] w-full h-full items-center justify-center flex"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit">
                <motion.div className="md:rounded-lg bg-white w-full lg:max-w-[850px] h-full lg:max-h-[600px]"
                variants={modal}
                initial={"hidden"}
                animate="visible">
                    <UploadVideoForm isOpen={isOpen} onClose={onClose} />
                </motion.div>
            </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default UploadModal;