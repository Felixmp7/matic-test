import PrimaryButton from '@atoms/Buttons/PrimaryButton';
import SectionTitle from '@atoms/SectionTitle';
import LatestArticles from '@organisms/LatestArticles';
import { Article_BM } from '@services/api/clients/public/interfaces';

type Props = {
    articles?: Article_BM[],
    isLoading: boolean,
    isArticlesFormVisible: boolean,
    openArticlesForm: () => void,
}

const LatestArticlesSection = ({
    articles, isLoading, isArticlesFormVisible, openArticlesForm,
}: Props) => (
    <section className="bg-[#FAFAFA]">
        <div className="flex flex-wrap items-center justify-between mb-[38px]">
            <SectionTitle title="Latest Articles" />
            {!isArticlesFormVisible && (
                <PrimaryButton type="button" onClick={openArticlesForm}>
                    + Add New Article
                </PrimaryButton>
            )}
        </div>
        <LatestArticles articles={articles} isLoading={isLoading} />
    </section>
);

export default LatestArticlesSection;
