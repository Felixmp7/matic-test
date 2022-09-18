import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

type Props = {
    text: string,
    icon: StaticImageData,
    alt: string,
    isDisabled?: boolean,
    reverseMode?: boolean,
    onClick: () => void,
}

const PaginationButton = ({
    text, icon, alt, reverseMode, isDisabled, onClick,
}: Props) => (
    <button
        type="button"
        onClick={onClick}
        disabled={isDisabled}
        className={clsx(
            'flex items-center',
            isDisabled && 'cursor-not-allowed',
            reverseMode
                ? 'flex-row-reverse' : 'flex-row',
        )}
    >
        <Image
            src={icon}
            alt={alt}
            width={12}
            height={12}
        />
        <span className={clsx(reverseMode ? 'mr-6' : 'ml-6', 'inline-block')}>{text}</span>
    </button>
);

export default PaginationButton;
