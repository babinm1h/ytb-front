import { FC } from 'react';
import { useSubscribe } from '../../../hooks/useSubscribe';
import { IUser } from '../../../types/models/user.types';
import { roundNumber } from '../../../utils/roundNumber';
import ChannelButtons from './Buttons/index ';

interface IAuthorProps {
    user: IUser
}

const Author: FC<IAuthorProps> = ({ user }) => {

    const { authUser, onToggleSubscribe, subsCount, isSubscribed } = useSubscribe(user)

    return (
        <div className="mb-10">
            {user && user.banner && <div className="w-full h-[200px]">
                <img src="https://i.ytimg.com/vi/Od5H_CiU2vM/maxresdefault.jpg" alt="wallpaper"
                    className="object-cover w-full h-full" />
            </div>}

            <div className="flex items-center mt-5 gap-5">
                <div className="w-20 h-20 rounded-[50%] flex-shrink-0">
                    <img src={user?.avatar} alt={user?.name}
                        className="object-cover w-full h-full rounded-[50%]" />
                </div>
                <div className="flex-grow">
                    <h2 className="font-medium text-2xl">{user?.name}</h2>
                    <div className="text-myGray">{roundNumber(subsCount)} subscribers</div>
                </div>
                <ChannelButtons authUser={authUser} userId={user._id} isSubscribed={isSubscribed}
                    onToggleSubscribe={onToggleSubscribe} />
            </div>
        </div>
    );
};

export default Author;