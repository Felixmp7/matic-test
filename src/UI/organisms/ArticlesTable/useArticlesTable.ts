import { useEffect, useState } from 'react';
import { Article_BM } from '@services/api/clients/public/interfaces';

const rowsPerPage = 6;

const useArticlesTable = (articles: Article_BM[]) => {
    const [results, setResults] = useState(articles);

    useEffect(() => setResults(articles), [articles]);

    return {
        results,
        rowsPerPage,
    };
};

export default useArticlesTable;
