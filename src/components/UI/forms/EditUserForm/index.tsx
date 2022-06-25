import React, { useEffect, useMemo } from 'react';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useUploadImage } from '../../../../hooks/useUploadFile';
import UploadAvatar from './UploadAvatar';
import UploadBanner from './UploadBanner';
import countryList from 'react-select-country-list'
import { SubmitHandler, useForm } from 'react-hook-form';
import CustomSelect from '../../controls/CustomSelect';
import Textarea from '../../controls/Textarea';
import { updateUser } from '../../../../redux/thunks/auth.thunks';
import { validate } from '../../../../utils/validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../../Loaders/Spinner';
import { setUpdateUserSuccess } from '../../../../redux/slices/auth.slice';


interface IForm {
    description: string
    name: string
    country: { label: string }
}

const EditUserForm = () => {
    const dispatch = useAppDispatch()
    const { user, updatePending, updateSuccess } = useAppSelector(state => state.auth)

    const options = useMemo(() => countryList().getData(), [])
    const { handleImg, img, preview } = useUploadImage()
    const { handleImg: handleBanner, img: banner, preview: bannerPreview } = useUploadImage()

    const onCountryChange = (option: any) => {
        setValue('country', option)
    }

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<IForm>()

    const onSubmit: SubmitHandler<IForm> = ({ country, description, name }) => {
        const fd = new FormData()
        fd.append("name", name)
        fd.append("description", description)
        fd.append("country", country.label)
        if (banner) fd.append("banner", banner)
        if (img) fd.append("avatar", img)
        dispatch(updateUser(fd))
    }

    useEffect(() => {
        if (updateSuccess) {
            toast.success('Channel updated successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch(setUpdateUserSuccess(false))
        } else return;
    }, [updateSuccess])

    if (!user) {
        return <div className="text-center"><Spinner /></div>
    }

    return (
        <>
            <form action="" className="flex flex-col gap-10 overflow-hidden" onSubmit={handleSubmit(onSubmit)}>
                <UploadAvatar preview={preview} handleImg={handleImg} user={user} />
                <UploadBanner preview={bannerPreview} handleImg={handleBanner} user={user} />
                <div className="">
                    <div className="text-[16px] font-medium mb-2">Select your country</div>
                    <CustomSelect options={options} placeholder='Choose country...' className='w-[250px]' onChange={onCountryChange} />
                </div>
                <Textarea register={register('description')} error={errors.description}
                    id='description' label='Channel description' rows={3} defaultValue={user.description} />
                <Textarea register={register('name', validate(1, 45))} error={errors.name}
                    id='name' label='Channel name' rows={2} defaultValue={user.name} />
                <button type="submit" className='subBtn bg-primaryBlue text-white self-start'
                    disabled={updatePending}>
                    save changes
                </button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
        </>
    );
};

export default EditUserForm;