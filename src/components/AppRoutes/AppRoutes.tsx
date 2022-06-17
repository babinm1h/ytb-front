import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Channel from '../../pages/Channel';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

export enum AllRoutes {
    home = '/*',
    login = '/login',
    register = '/register',
    video = '/video',
    channel = '/channel',
    search = '/search'
}

const AppRoutes = () => {

    const routes = [
        { path: AllRoutes.home, elem: <Home /> },
        { path: AllRoutes.channel + '/:id', elem: <Channel /> },
        { path: AllRoutes.login, elem: <Login /> },
        { path: AllRoutes.register, elem: <Register /> },
    ]

    return (
        <Routes>

            {routes.map(r => <Route path={r.path} element={r.elem} key={r.path} />)}

        </Routes>
    );
};

export default AppRoutes;
