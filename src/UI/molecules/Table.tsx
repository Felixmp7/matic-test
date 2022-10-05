import clsx from 'clsx';
import DeleteArticle from '@atoms/DeleteArticle';
import { Article_BM } from '@services/api/clients/public/interfaces';
import useArticleContext from '@templates/LatestArticles/hooks/useArticlesContext';
import { parseDate } from '@helpers/dates';

type Props = {
    results: Article_BM[],
}

const Table = ({ results }: Props) => {
    const { setDefaultFormValues } = useArticleContext();

    const handleEditArticle = (article: Article_BM) => {
        const defaultValues = {
            id: article.id,
            author: article.author,
            blogTitle: article.title,
            blogContent: article.content,
        };
        setDefaultFormValues(defaultValues);
    };
    return (
        <div className="overflow-x-scroll border rounded-lg border-primary-gray-200">
            <table className="w-[918px] tabletXXl:w-full table-auto text-primary-gray-500">
                <thead>
                    <tr className="h-10 text-left bg-primary-gray-400 text-[12px] leading-4 tracking-[0.05em] border-b">
                        <th className="py-3 pl-6 font-light">AUTHOR NAME</th>
                        <th className="py-3 pl-6 font-light">TITLE</th>
                        <th className="py-3 pl-6 font-light">CONTENT</th>
                        <th className="py-3 pl-6 font-light">DATE</th>
                        <th className="py-3 pl-6" />
                    </tr>
                </thead>
                <tbody>
                    {results.map((article, index) => {
                        const isOddRow = index % 2 !== 0;
                        return (
                            <tr key={article.id} className={clsx('h-10 text-[14px] leading-5', isOddRow && 'bg-primary-gray-400')}>
                                <td className="py-3 pl-6 font-medium truncate w-[152px] text-primary-dark-blue">{article.author}</td>
                                <td className="max-w-[313px] pl-6 py-3 truncate -tracking-[0.02em]">{article.title}</td>
                                <td className="max-w-[383px] pl-6 py-3 truncate -tracking-[0.02em]">{article.content}</td>
                                <td className="py-3 pl-6">{parseDate(new Date(article.updatedAt))}</td>
                                <td className="py-3 pl-6 space-x-4">
                                    <DeleteArticle
                                        articleId={article.id}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleEditArticle(article)}
                                        className="text-secondary-green"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
