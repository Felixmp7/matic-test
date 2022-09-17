import PrimaryButton from '@atoms/PrimaryButton';
import SectionTitle from '@atoms/SectionTitle';
import LatestArticles from '@organisms/LatestArticles';
import { Article } from '@services/api/clients/public/interfaces';

type Props = {
    articles?: Article[],
    isLoading: boolean,
    isArticlesFormVisible: boolean,
    openArticlesForm: () => void,
}

const LatestArticlesSection = ({
    articles, isLoading, isArticlesFormVisible, openArticlesForm,
}: Props) => (
    <section className="bg-[#FAFAFA]">
        <div className="flex items-center justify-between mb-[38px]">
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
