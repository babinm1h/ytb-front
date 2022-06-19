import React, { FC } from 'react';
import { IUser } from '../../../types/models/user.types';

interface ICommentsFormProps {
    user: IUser
}

const CommentsForm: FC<ICommentsFormProps> = ({ user }) => {
    return (
        <div>
            <form action="" className="flex flex-col gap-5 my-7 flex-grow">
                <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img src={user.avatar} alt="" className="rounded-[50%] w-full h-full" />
                    </div>
                    <input type="text" className="w-full border-b-2 border-gray-400 py-1 focus:border-black"
                        placeholder='Add a comment...' />
                </div>
                <button type="submit" className='subBtn text-white bg-primaryBlue self-end'>
                    Comment
                </button>
            </form>
        </div>
    );
};

export default CommentsForm;