import useSWR from 'swr';
import PrimaryButton from '@atoms/PrimaryButton';
import SectionTitle from '@atoms/SectionTitle';
import SectionLayout from '@templates/layouts/SectionLayout';
import API from '@services/api';
import LatestArticles from '@organisms/LatestArticles';

const fetchArticles = () => API.public.getAllArticles();

const LatestArticlesSection = () => {
    const { data: fetchResponse, isValidating } = useSWR('articles', fetchArticles, {
        revalidateOnFocus: false,
    });

    const articles = fetchResponse?.data && fetchResponse.data.slice(0, 4);

    return (
        <SectionLayout sectionClassName="bg-[#FAFAFA]">
            <div className="flex items-center justify-between mb-[38px]">
                <SectionTitle title="Latest Articles" />
                <PrimaryButton>
                    + Add New Article
                </PrimaryButton>
            </div>
            <LatestArticles articles={articles} isLoading={isValidating} />
        </SectionLayout>
    );
};

export default LatestArticlesSection;
