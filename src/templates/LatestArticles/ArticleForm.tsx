import PrimaryButton from '@atoms/PrimaryButton';
import SectionTitle from '@atoms/SectionTitle';
import TextAreaField from '@molecules/Fields/TextAreaField';
import TextField from '@molecules/Fields/TextField';
import useArticlesForm from './useArticlesForm';

type Props = {
    mutateLatestArticles: () => void,
}

const ArticleForm = ({ mutateLatestArticles }: Props) => {
    const {
        handleSubmit, register, errors,
    } = useArticlesForm(mutateLatestArticles);
    return (
        <section className="bg-[#F9F9F9]">
            <SectionTitle title="Add New Blog Article" />
            <p className="text-[17px] leading-[25px] text-primary-gray font-light mt-5 mb-[72px]">
                Publish a new blog article to feature in the Easybank homepage.
            </p>

            <form
                onSubmit={handleSubmit}
                className="w-[693px] mx-auto p-6 bg-white border rounded-3xl shadow mb-20"
            >
                <TextField
                    id="author-field"
                    label="Author"
                    fieldProps={{ ...register('author') }}
                    errorMessage={errors.author?.message}
                />
                <TextField
                    id="blog-title-field"
                    label="Blog Title"
                    fieldProps={{ ...register('blogTitle') }}
                    containerClasses="my-4"
                    errorMessage={errors.blogTitle?.message}
                />
                <TextAreaField
                    id="blog-content-field"
                    label="Blog Content"
                    fieldProps={{ ...register('blogContent') }}
                    containerClasses="my-4"
                    errorMessage={errors.blogContent?.message}
                />
                <PrimaryButton type="submit" className="w-full">
                    Save
                </PrimaryButton>
            </form>
        </section>
    );
};

export default ArticleForm;
