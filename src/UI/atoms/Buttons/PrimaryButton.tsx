import Spinner from '@atoms/Spinner';
import clsx from 'clsx';
import { ComponentProps } from 'react';

type Props = ComponentProps<'button'> & {
    isActive?: boolean
    isLoading?: boolean
}

const PrimaryButton = ({
    type,
    children,
    isActive,
    isLoading,
    ...rest
}: Props) => (
    <button
        {...rest}
        // eslint-disable-next-line react/button-has-type
        type={type ?? 'button'}
        className={
            clsx(
                'px-6 h-[45px] rounded-full text-white text-center hover:from-primary-green hover:to-primary-cyan',
                isActive
                    ? 'bg-gradient-to-r from-primary-green to-primary-cyan'
                    : 'bg-gradient-to-r from-secondary-green to-secondary-cyan',
                rest.className,
            )
        }
    >
        {(() => {
            if (isLoading) return <Spinner containerClassName="grid h-full place-items-center" />;
            return children || 'Request Invite';
        })()}
    </button>
);

export default PrimaryButton;
