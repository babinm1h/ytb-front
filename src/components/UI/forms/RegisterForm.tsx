import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AllRoutes } from '../../AppRoutes/AppRoutes';
import AuthFormControl from '../controls/AuthFormControl';
import { SubmitHandler, useForm } from 'react-hook-form'
import { validate } from '../../../utils/validate';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { regisrate } from '../../../redux/thunks/auth.thunks';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

interface IForm {
    name: string
    password: string
    email: string
}

const RegisterForm = () => {
    const nav = useNavigate()
    const dispatch = useAppDispatch()
    const { registerError, isProccessing, user } = useAppSelector(state => state.auth)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IForm>()

    const onSubmit: SubmitHandler<IForm> = (data) => {
        dispatch(regisrate(data))
    }

    useEffect(() => {
        if (!user) return;
        if (user) {
            reset()
            nav(AllRoutes.home)
        }
    }, [user])

    return (
        <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
            <AuthFormControl register={register('email', validate(5, 50))} label='Your email'
                id='email' type="email" error={errors.email} />
            <AuthFormControl register={register('name', validate(2, 35))} label='Channel name'
                id='name' type="text" error={errors.name} />
            <AuthFormControl register={register('password', validate(6, 35))} label='Password'
                id='password' type="password" error={errors.password} />

            <div className="">
                {registerError && <div className='text-red-600'>{registerError}</div>}
                <div className="flex items-center justify-between mt-5">
                    <NavLink to={AllRoutes.login} className='text-lightBlue font-medium hover:underline'>
                        Login
                    </NavLink>
                    <button className="text-white bg-lightBlue px-7 py-2 rounded-md transition-colors hover:bg-primaryBlue" type='submit' disabled={isProccessing}>
                        Create account
                    </button>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;