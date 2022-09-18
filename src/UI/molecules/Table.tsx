import clsx from 'clsx';
import DeleteArticle from '@atoms/DeleteArticle';
import { Article } from '@services/api/clients/public/interfaces';
import useArticleContext from '@templates/LatestArticles/hooks/useArticlesContext';
import { parseDate } from '@helpers/dates';

type Props = {
    results: Article[],
    mutateLatestArticles: () => void,
}

const Table = ({ results, mutateLatestArticles }: Props) => {
    const { setDefaultFormValues } = useArticleContext();

    const handleEditArticle = (article: Article) => {
        const defaultValues = {
            id: article.id,
            author: article.author,
            blogTitle: article.title,
            blogContent: article.content,
        };
        setDefaultFormValues(defaultValues);
    };
    return (
        <div className="overflow-hidden border rounded-lg border-primary-gray-200 ">
            <table className="w-full table-fixed text-primary-gray-500">
                <thead>
                    <tr className="h-10 text-left bg-primary-gray-400 text-[12px] leading-4 tracking-[0.05em] border-b">
                        <th className="px-6 py-3 font-light">AUTHOR NAME</th>
                        <th className="px-6 py-3 font-light">TITLE</th>
                        <th className="px-6 py-3 font-light">CONTENT</th>
                        <th className="px-6 py-3 font-light">DATE</th>
                        <th className="px-6 py-3" />
                    </tr>
                </thead>
                <tbody>
                    {results.map((article, index) => {
                        const isOddRow = index % 2 !== 0;
                        return (
                            <tr key={article.id} className={clsx('h-10 text-[14px] leading-5', isOddRow && 'bg-primary-gray-400')}>
                                <td className="px-6 py-3 font-medium truncate text-primary-dark-blue">{article.author}</td>
                                <td className="px-6 py-3 truncate -tracking-[0.02em]">{article.title}</td>
                                <td className="px-6 py-3 truncate -tracking-[0.02em]">{article.content}</td>
                                <td className="px-6 py-3">{parseDate(new Date(article.updatedAt))}</td>
                                <td className="px-6 py-3 space-x-4">
                                    <DeleteArticle
                                        articleId={article.id}
                                        mutateLatestArticles={mutateLatestArticles}
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
