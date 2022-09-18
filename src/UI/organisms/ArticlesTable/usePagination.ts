import { Article } from '@services/api/clients/public/interfaces';
import { useState } from 'react';

const rowsPerPage = 6;

const usePagination = (articles: Article[]) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(articles.length / rowsPerPage);

    const handleSetCurrentPage = (newPage: number) => setCurrentPage(newPage);

    return {
        currentPage,
        totalPages,
        handleSetCurrentPage,
    };
};

export default usePagination;
