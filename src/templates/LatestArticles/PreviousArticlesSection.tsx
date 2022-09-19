import SectionTitle from '@atoms/SectionTitle';
import ArticlesTable from '@organisms/ArticlesTable';
import { Article_BM } from '@services/api/clients/public/interfaces';

type Props = {
    articles?: Article_BM[],
    mutateLatestArticles: () => void,
}

const PreviousArticlesSection = ({ articles, mutateLatestArticles }: Props) => (
    <section className="bg-[#F9F9F9] mb-24">
        <SectionTitle title="Previous Articles" />
        <p className="text-[17px] leading-[25px] text-primary-gray font-light mt-5 mb-[72px]">
            Review and edit previous blog posts published on to the homepage.
        </p>
        {articles && <ArticlesTable articles={articles} mutateLatestArticles={mutateLatestArticles} />}
    </section>
);

export default PreviousArticlesSection;
