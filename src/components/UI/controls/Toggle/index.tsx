import { Switch } from '@headlessui/react';
import cn from 'classnames';
import React, { Dispatch, FC, SetStateAction } from 'react';
import s from './Toggle.module.scss'

interface IToggleProps {
    enabled: boolean
    setEnabled: Dispatch<SetStateAction<boolean>>
    title: string
}

const Toggle: FC<IToggleProps> = ({ enabled, setEnabled, title }) => {
    return (
        <>
            <div className="mb-2 font-medium">{title}</div>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={cn(s.toggle, {
                    'bg-red-500': enabled,
                    'bg-myGray': !enabled
                })}
            >
                <span
                    aria-hidden="true"
                    className={cn(s.dot, {
                        'translate-x-10': enabled,
                        'translate-x-1': !enabled
                    })}
                />
            </Switch>
        </>
    );
};

export default Toggle;