import React, { FC } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import cn from 'classnames'
import s from './Textarea.module.scss'

interface ITextareaProps {
    id: string
    label: string
    register: UseFormRegisterReturn
    error: FieldError | undefined
    rows: number
    defaultValue?: string
}

const Textarea: FC<ITextareaProps> = ({ error, id, label, register, rows, defaultValue }) => {
    return (
        <div className={cn(s.wrapper, {
            "border-red-500": error,
            'border-primaryBlue': !error
        })}>
            <label htmlFor={id} className={cn(s.label, {
                'text-red-500': error,
                'text-myGray': !error
            })}>
                {label} (required)
            </label>
            <textarea id={id} className='resize-none py-1' {...register} rows={rows}
                defaultValue={defaultValue}>
            </textarea>
        </div>
    );
};

export default Textarea;