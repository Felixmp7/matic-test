import clsx from 'clsx';
import { ComponentProps } from 'react';

type Props = ComponentProps<'button'> & {
    isActive?: boolean
}

const PrimaryButton = ({
    type,
    children,
    isActive,
    ...rest
}: Props) => (
    <button
        {...rest}
        // eslint-disable-next-line react/button-has-type
        type={type ?? 'button'}
        className={
            clsx(
                'px-6 h-[45px] rounded-full text-white hover:from-primary-green hover:to-primary-cyan',
                isActive
                    ? 'bg-gradient-to-r from-primary-green to-primary-cyan'
                    : 'bg-gradient-to-r from-secondary-green to-secondary-cyan',
                rest.className,
            )
        }
    >
        {children || 'Request Invite'}
    </button>
);

export default PrimaryButton;
