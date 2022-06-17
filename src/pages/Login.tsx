import React from 'react';
import AuthLayout from '../components/AuthLayout';
import LoginForm from '../components/UI/forms/LoginForm';

const Login = () => {
    return (
        <AuthLayout title={'Login'}>
            <LoginForm />
        </AuthLayout>
    );
};

export default Login;