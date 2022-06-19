import React, { FC } from 'react';
import { IComment } from '../../../types/models/comment.types';
import Comment from './Comment';

interface ICommentsListProps {
    comments: IComment[]
}

const CommentsList: FC<ICommentsListProps> = ({ comments }) => {
    return (
        <ul className="flex flex-col gap-10">
            {comments.map(c => <Comment comment={c} key={c._id} />)}
        </ul>
    );
};

export default CommentsList;