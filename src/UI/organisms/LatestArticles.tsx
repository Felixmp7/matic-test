import Article from '@molecules/Article';
import { Article_BM } from '@services/api/clients/public/interfaces';

type Props = {
    articles?: Article_BM[],
    isLoading: boolean
}

const LatestArticles = ({ articles, isLoading }: Props) => (
    <div className="grid gap-10 mobileLg:grid-cols-2 place-items-center tabletLg:place-items-start tabletLg:grid-cols-4">
        {isLoading || !articles
            ? Array.from(Array(4).keys()).map((value) => (
                <div key={value} className="overflow-hidden bg-white rounded-lg animate-pulse w-full max-w-[248px]">
                    <div className="w-full h-40 bg-gray-200" />
                    <div className="p-[26px] space-y-4">
                        <div className="w-20 h-2 bg-gray-200 rounded-lg" />
                        <div className="w-full h-4 bg-gray-200 rounded-lg" />
                        <div className="w-full h-10 bg-gray-200 rounded-lg" />
                    </div>
                </div>
            ))
            : articles.map((article) => (
                <Article {...article} key={article.id} />
            ))}
    </div>
);

export default LatestArticles;
