import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../../components/layouts/MainLayout';
import EditVideoForm from '../../../components/UI/forms/EditVideoForm';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { fetchChoosenVideo } from '../../../redux/thunks/studio.thunks';

const EditVideo = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams() as { id: string }

    useEffect(() => {
        if (id) dispatch(fetchChoosenVideo(id))
    }, [id, dispatch])

    return (
        <MainLayout>
            <div className="p-10">
                <h1 className="font-semibold text-2xl mb-5">Video details</h1>
                <EditVideoForm />
            </div>
        </MainLayout>
    );
};

export default EditVideo;