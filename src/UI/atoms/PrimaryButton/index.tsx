import clsx from 'clsx';
import { ComponentProps } from 'react';

const PrimaryButton = ({ type, children, ...rest }: ComponentProps<'button'>) => (
    <button
        {...rest}
        // eslint-disable-next-line react/button-has-type
        type={type ?? 'button'}
        className={clsx('bg-gradient-to-r from-primary-green to-primary-cyan px-6 h-[45px] rounded-full text-white', rest.className)}
    >
        {children || 'Request Invite'}
    </button>
);

export default PrimaryButton;
