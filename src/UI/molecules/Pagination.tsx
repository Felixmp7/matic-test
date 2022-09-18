import PaginationButton from '@atoms/Buttons/PaginationButton';
import clsx from 'clsx';
import arrowLeftIcon from 'public/assets/icons/arrow-left.svg';
import arrowRightIcon from 'public/assets/icons/arrow-right.svg';

type Props = {
    currentPage: number,
    totalPages: number,
    handleSetCurrentPage: (page: number) => void,
}

const Pagination = ({ currentPage, totalPages, handleSetCurrentPage }: Props) => {
    const allPages = Array.from(Array(totalPages).keys());
    return (
        <nav
            aria-label="Table navigation"
            className="flex items-center justify-between w-full border-t border-primary-gray-200 text-[14px] leading-5 text-primary-gray-500"
        >
            <PaginationButton
                text="Previous"
                alt="Previous icon"
                icon={arrowLeftIcon}
                isDisabled={currentPage <= 0}
                onClick={() => handleSetCurrentPage(currentPage - 1)}
            />
            <ul className="inline-flex -space-x-px">
                {allPages.map((_, index) => {
                    const isCurrentPage = currentPage === index;

                    return (
                        <li key={index + 1} className="relative p-4">
                            {isCurrentPage && (
                                <div className="absolute inset-x-0 -top-[1px] w-full h-[1px] bg-primary-green" />
                            )}
                            <button
                                type="button"
                                className={clsx(isCurrentPage && 'text-primary-green')}
                                onClick={() => handleSetCurrentPage(index)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <PaginationButton
                text="Next"
                alt="Next icon"
                reverseMode
                icon={arrowRightIcon}
                isDisabled={currentPage >= totalPages - 1}
                onClick={() => handleSetCurrentPage(currentPage + 1)}
            />
        </nav>
    );
};

export default Pagination;
