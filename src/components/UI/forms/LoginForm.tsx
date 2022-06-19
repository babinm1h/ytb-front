import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { login } from '../../../redux/thunks/auth.thunks';
import { validate } from '../../../utils/validate';
import { AllRoutes } from '../../AppRoutes/AppRoutes';
import AuthFormControl from '../controls/AuthFormControl';


interface IForm {
    name: string
    password: string
    email: string
}

const LoginForm = () => {
    const nav = useNavigate()
    const dispatch = useAppDispatch()
    const { loginError, isProccessing, user } = useAppSelector(state => state.auth)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IForm>()

    const onSubmit: SubmitHandler<IForm> = (data) => {
        dispatch(login(data))
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
            <AuthFormControl register={register('password', validate(6, 35))} label='Password'
                id='password' type="password" error={errors.password} />
            {loginError && <div className='text-red-600'>{loginError}</div>}
            <div className="flex items-center justify-between mt-5">
                <NavLink to={AllRoutes.register} className='text-lightBlue font-medium hover:underline'>
                    Create account
                </NavLink>
                <button className="text-white bg-lightBlue px-7 py-2 rounded-md transition-colors hover:bg-primaryBlue" type='submit' disabled={isProccessing}>
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;