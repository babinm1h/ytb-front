import React from 'react';
import AuthLayout from '../components/AuthLayout';
import RegisterForm from '../components/UI/forms/RegisterForm';

const Register = () => {
    return (
        <AuthLayout title='Registration'>
            <RegisterForm />
        </AuthLayout>
    );
};

export default Register;