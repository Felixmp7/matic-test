import { Article_BM } from '@services/api/clients/public/interfaces';
import { useState } from 'react';

const usePagination = (articles: Article_BM[], rowsPerPage: number) => {
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
