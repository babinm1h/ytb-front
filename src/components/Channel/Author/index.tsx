import { FC, useState } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { toglgeSubscribeUser } from '../../../redux/thunks/auth.thunks';
import { IUser } from '../../../types/models/user.types';
import ChannelButtons from './Buttons/index ';

interface IAuthorProps {
    user: IUser
}

const Author: FC<IAuthorProps> = ({ user }) => {
    const dispatch = useAppDispatch()
    const { user: authUser } = useAppSelector(state => state.auth)
    const [subsCount, setSubsCount] = useState<number>(user.subscribersCount)

    const isSubscribed = authUser && authUser.subscriptions.includes(user._id)


    const onToggleSubscribe = () => {
        if (isSubscribed) {
            setSubsCount(prev => prev - 1)
        } else {
            setSubsCount(prev => prev + 1)
        }
        dispatch(toglgeSubscribeUser(user._id))
    }


    return (
        <div className="">
            {user && user.banner && <div className="w-full h-[200px]">
                <img src="https://i.ytimg.com/vi/Od5H_CiU2vM/maxresdefault.jpg" alt="wallpaper"
                    className="object-cover w-full h-full" />
            </div>}

            <div className="flex items-center mt-5 gap-5">
                <div className="w-20 h-20 rounded-[50%]">
                    <img src={user?.avatar} alt={user?.name}
                        className="object-cover w-full h-full rounded-[50%]" />
                </div>
                <div className="flex-grow">
                    <h2 className="font-medium text-2xl">{user?.name}</h2>
                    <div className="text-myGray">{subsCount} subscribers</div>
                </div>
                <ChannelButtons authUser={authUser} userId={user._id} isSubscribed={isSubscribed}
                    onToggleSubscribe={onToggleSubscribe} />
            </div>
        </div>
    );
};

export default Author;