import React, { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CloseIcon, UploadIcon } from '../../../../assets/icons';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useUploadImage } from '../../../../hooks/useUploadFile';
import { setCreateSuccess } from '../../../../redux/slices/videos.slice';
import { createVideo } from '../../../../redux/thunks/videos.thunks';
import { validate } from '../../../../utils/validate';
import Textarea from '../../controls/Textarea';
import Toggle from '../../controls/Toggle';
import PreviewBlock from './PrewiewBlock';
import UploadPreview from './UploadPreview';
import VideoUploadStage from './VideoUploadStage';


interface IForm {
    description: string
    title: string
}

interface IUploadVideoFormProps {
    isOpen: boolean
    onClose: () => void
}

const UploadVideoForm: FC<IUploadVideoFormProps> = ({ isOpen, onClose }) => {
    const dispatch = useAppDispatch()
    const { createPending, createSuccess } = useAppSelector(state => state.videos)

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<IForm>({ mode: "onChange" })
    const [enabled, setEnabled] = useState(false)
    const { handleImg, img, preview, resetFiles } = useUploadImage()
    const [videoFile, setVideoFile] = useState<null | File>(null)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'auto';
                resetFiles()
                setVideoFile(null)
                reset()
            }
        }
    }, [isOpen])


    const onSubmit: SubmitHandler<IForm> = ({ description, title }) => {
        if (img && videoFile) {
            const fd = new FormData()
            fd.append('description', description)
            fd.append("title", title)
            fd.append('preview', img)
            fd.append('video', videoFile)
            fd.append('isPublic', String(enabled))
            dispatch(createVideo(fd))
        }
    }

    const handleVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setVideoFile(e.target.files[0])
            setValue("title", e.target.files[0].name)
        }
    }

    useEffect(() => {
        if (createSuccess) {
            onClose()
            dispatch(setCreateSuccess(false))
        }
        return;
    }, [createSuccess])

    return (
        <>
            {videoFile
                ? <form action="" className="w-full flex flex-col h-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="border-b border-gray-300 p-5 flex items-center">
                        <span className='sectionTitle m-0 flex-grow'>{videoFile.name}</span>
                        <button onClick={onClose} className='actionIcon' disabled={createPending}>
                            <CloseIcon className='w-6 h-6 text-myGray' />
                        </button>
                    </div>
                    <div className='flex gap-5 p-5 flex-grow overflow-x-hidden overflow-y-scroll myScroll flex-col md:flex-row'>
                        <div className="flex-[2] flex items-start flex-col">
                            <div className="w-full" onSubmit={handleSubmit(onSubmit)}>
                                <Textarea register={register("title", validate(1, 100))} error={errors.title}
                                    id='title' label="Title" rows={3} />
                                <Textarea register={register("description", validate(1, 700))} error={errors.description}
                                    id='description' label="Description" rows={7} />
                                <Toggle enabled={enabled} setEnabled={setEnabled} title="Make video public?" />
                            </div>

                            <UploadPreview handleImg={handleImg} />
                        </div>

                        <PreviewBlock filename={videoFile.name} preview={preview} />
                    </div>
                    <div className="flex items-center px-5 py-3 border-t border-gray-300 gap-2">
                        <UploadIcon className='text-primaryBlue w-6 h-6 animate-pulse' />
                        <div className="flex-grow text-myGray text-[12px]">No issues found.</div>
                        <button className="subBtn text-white bg-primaryBlue self-end" type='submit'
                            disabled={createPending}>
                            save
                        </button>
                    </div>
                </form>
                : <VideoUploadStage handleVideo={handleVideo} onClose={onClose} />}
        </>
    );
};

export default UploadVideoForm;