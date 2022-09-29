import ArticleForm from '@organisms/ArticlesForm';
import SectionTitle from '@atoms/SectionTitle';

const ArticleFormSection = () => (
    <section className="bg-[#F9F9F9]">
        <SectionTitle title="Add New Blog Article" />
        <p className="text-[17px] leading-[25px] text-primary-gray font-light mt-5 mb-[72px]">
            Publish a new blog article to feature in the Easybank homepage.
        </p>

        <ArticleForm />
    </section>
);

export default ArticleFormSection;
