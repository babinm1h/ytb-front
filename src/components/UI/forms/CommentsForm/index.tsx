import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { commentVideo } from '../../../../redux/thunks/videoPage.thunks';
import { IUser } from '../../../../types/models/user.types';
import { validate } from '../../../../utils/validate';
import defUser from '../../../../assets/defUser.png'

interface ICommentsFormProps {
    user: IUser
    videoId: string
}

interface IForm {
    text: string
}

const CommentsForm: FC<ICommentsFormProps> = ({ user, videoId }) => {
    const { isCommenting } = useAppSelector(state => state.videoPage)
    const dispatch = useAppDispatch()
    const { register, handleSubmit, reset } = useForm<IForm>()

    const onSubmit: SubmitHandler<IForm> = ({ text }) => {
        dispatch(commentVideo({ text, videoId }))
        reset()
    }

    return (
        <div>
            <form action="" className="flex flex-col gap-5 my-7 flex-grow" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img src={user.avatar ?  user.avatar : defUser} alt="avatar"
                            className="rounded-[50%] w-full h-full object-cover" />
                    </div>
                    <input type="text" className="w-full border-b-2 border-gray-400 py-1 focus:border-black"
                        placeholder='Add a comment...' {...register("text", validate(1, 350))} />
                </div>
                <button type="submit" className='subBtn text-white bg-primaryBlue self-end'
                    disabled={isCommenting}>
                    Comment
                </button>
            </form>
        </div>
    );
};

export default CommentsForm;