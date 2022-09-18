import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

type Props = {
    text: string,
    icon: StaticImageData,
    alt: string,
    reverseMode?: boolean,
    onClick: () => void,
}

const PaginationButton = ({
    text, icon, alt, reverseMode, onClick,
}: Props) => (
    <button
        type="button"
        onClick={onClick}
        className={clsx(reverseMode ? 'flex-row-reverse' : 'flex-row', 'flex items-center')}
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
