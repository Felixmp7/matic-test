import SectionTitle from '@atoms/SectionTitle';
import ArticlesTable from '@organisms/ArticlesTable';
import { Article_BM } from '@services/api/clients/public/interfaces';

type Props = {
    articles?: Article_BM[],
}

const PreviousArticlesSection = ({ articles }: Props) => (
    <section className="bg-[#F9F9F9] mb-24">
        <SectionTitle title="Previous Articles" />
        <p className="text-[17px] leading-[25px] text-primary-gray font-light mt-5 mb-[72px]">
            Review and edit previous blog posts published on to the homepage.
        </p>
        {articles && <ArticlesTable articles={articles} />}
    </section>
);

export default PreviousArticlesSection;
