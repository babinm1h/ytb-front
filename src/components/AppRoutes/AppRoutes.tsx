import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import Channel from '../../pages/Channel';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import StudioCustomisation from '../../pages/Studio/Customisation';
import EditVideo from '../../pages/Studio/EditVideo';
import StudioContent from '../../pages/Studio/StudioContent';
import Subscriptions from '../../pages/Subscriptions';
import VideoPage from '../../pages/VideoPage';

export enum AllRoutes {
    home = '/*',
    login = '/login',
    register = '/register',
    video = '/video',
    channel = '/channel',
    search = '/search',
    subscriptions = '/subscriptions',
    studio = '/studio'
}

const AppRoutes = () => {
    const { user } = useAppSelector(state => state.auth)

    const routes = [
        { path: AllRoutes.home, elem: <Home /> },
        { path: AllRoutes.login, elem: <Login /> },
        { path: AllRoutes.register, elem: <Register /> },
        { path: AllRoutes.video + "/:id", elem: <VideoPage /> },
    ]

    const privateRoutes = [
        { path: AllRoutes.subscriptions, elem: <Subscriptions /> },
        { path: AllRoutes.studio + "/content", elem: <StudioContent /> },
        { path: AllRoutes.studio + "/customisation", elem: <StudioCustomisation /> },
        { path: AllRoutes.studio + "/:id", elem: <EditVideo /> },
    ]

    return (
        <Routes>
            {routes.map(r => <Route path={r.path} element={r.elem} key={r.path} />)}
            <Route path={AllRoutes.channel + '/:id'} element={<Channel />}>
                <Route path={'home'} element={<Channel />} />
                <Route path={'videos'} element={<Channel />} />
                <Route path={'about'} element={<Channel />} />
            </Route>
            {user && privateRoutes.map(r => <Route key={r.path} element={r.elem} path={r.path} />)}
        </Routes>
    );
};

export default AppRoutes;
