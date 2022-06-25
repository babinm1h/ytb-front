import React from 'react';
import MainLayout from '../../../components/layouts/MainLayout';
import EditUserForm from '../../../components/UI/forms/EditUserForm';

const StudioCustomisation = () => {

    return (
        <MainLayout>
            <div className="p-5">
                <h1 className="text-lg sm:text-2xl font-semibold mb-5">Channel customisation</h1>
                <EditUserForm />
            </div>
        </MainLayout>
    );
};

export default StudioCustomisation;