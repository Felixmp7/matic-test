import ArticlesContextProvider from '@context/ArticlesContext';
import SectionLayout from '@templates/layouts/SectionLayout';
import ArticleForm from './ArticleForm';
import PreviousArticles from './PreviousArticles';
import LatestArticlesSection from './LatestArticleSection';
import useArticles from './useArticles';

const ArticlesSection = () => {
    const {
        lastArticles,
        allArticles,
        isLoading,
        showForm,
        openArticlesForm,
        mutateLatestArticles,
    } = useArticles();

    return (
        <ArticlesContextProvider>
            <SectionLayout sectionClassName="bg-[#f9f9f9]">
                {showForm && (
                    <>
                        <ArticleForm mutateLatestArticles={mutateLatestArticles} />
                        <PreviousArticles
                            articles={allArticles}
                            mutateLatestArticles={mutateLatestArticles}
                        />
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
