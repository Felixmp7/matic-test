import Pagination from '@molecules/Pagination';
import Table from '@molecules/Table';
import { Article_BM } from '@services/api/clients/public/interfaces';
import useArticlesTable from './useArticlesTable';
import usePagination from './usePagination';

type Props = {
    articles: Article_BM[],
}

const ArticlesTable = ({ articles }: Props) => {
    const { results, rowsPerPage } = useArticlesTable(articles);
    const { currentPage, totalPages, handleSetCurrentPage } = usePagination(articles, rowsPerPage);

    const resultsPerPage = results.slice(currentPage * rowsPerPage, (currentPage * rowsPerPage) + rowsPerPage);

    return (
        <>
            {resultsPerPage.length > 0 && (
                <Table results={resultsPerPage} />
            )}
            <div className="mt-12">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handleSetCurrentPage={handleSetCurrentPage}
                />
            </div>
        </>
    );
};

export default ArticlesTable;
