import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { DotsIcon, TrashIcon } from '../../../../assets/icons';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { deleteComment } from '../../../../redux/thunks/videoPage.thunks';
import { IComment } from '../../../../types/models/comment.types';
import { getCreationTime } from '../../../../utils/time.helpers';
import { AllRoutes } from '../../../AppRoutes/AppRoutes';
import Popup from '../../../Popup';
import defUser from "../../../../assets/defUser.png"

interface ICommentProps {
    comment: IComment
}

const Comment: FC<ICommentProps> = ({ comment }) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.auth)
    const { isVisible, ref, onToggleVisible } = useOutsideClick(false)

    const handleDeleteComment = () => {
        dispatch(deleteComment(comment._id))
    }

    return (
        <li className="flex gap-3">
            <div className="w-10 h-10 flex-shrink-0">
                <img src={comment.user.avatar ?comment.user.avatar : defUser} alt={comment.user.name}
                    className="w-full h-full rounded-[50%] object-cover" />
            </div>
            <div className="flex-grow">
                <div className="flex sm:items-center sm:gap-2 flex-col sm:flex-row">
                    <NavLink to={AllRoutes.channel + `/${comment.user._id}/home`} className="font-semibold">
                        {comment.user.name}
                    </NavLink>
                    <span className="text-myGray text-[12px] flex-grow">
                        {getCreationTime(comment.createdAt)}
                    </span>
                </div>
                <p className="sm:mt-1 mt-0">{comment.text}</p>
            </div>
            {user && user._id === comment.user._id && <div className='relative' ref={ref}>
                <button onClick={onToggleVisible}>
                    <DotsIcon className='actionIcon' />
                </button>
                {isVisible && <Popup>
                    <ul className="">
                        <li className="popupLi" onClick={handleDeleteComment}>
                            <TrashIcon className='w-6 h-6' /> Remove
                        </li>
                    </ul>
                </Popup>}
            </div>}
        </li >
    );
};

export default Comment;