import ArticlesContextProvider from '@context/ArticlesContext';
import SectionLayout from '@templates/layouts/SectionLayout';
import ArticleFormSection from './ArticleFormSection';
import PreviousArticlesSection from './PreviousArticlesSection';
import LatestArticlesSection from './LatestArticleSection';
import useArticles from './hooks/useArticles';

const ArticlesSection = () => {
    const {
        lastArticles,
        allArticles,
        isLoading,
        showForm,
        openArticlesForm,
    } = useArticles();

    return (
        <ArticlesContextProvider>
            <SectionLayout sectionClassName="bg-[#f9f9f9]">
                {showForm && (
                    <>
                        <ArticleFormSection />
                        <PreviousArticlesSection articles={allArticles} />
                    </>
                )}
                <LatestArticlesSection
                    articles={lastArticles}
                    isLoading={isLoading}
                    isArticlesFormVisible={showForm}
                    openArticlesForm={openArticlesForm}
                />
            </SectionLayout>
        </ArticlesContextProvider>
    );
};

export default ArticlesSection;
