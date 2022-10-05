import PrimaryButton from '@atoms/Buttons/PrimaryButton';
import TextAreaField from '@molecules/Fields/TextAreaField';
import TextField from '@molecules/Fields/TextField';
import useArticlesForm from './useArticlesForm';

const ArticleForm = () => {
    const {
        errors,
        isSubmitting,
        handleSubmit,
        register,
    } = useArticlesForm();

    return (
        <form
            onSubmit={handleSubmit}
            className="tablet:w-[693px] mx-auto p-6 bg-white border rounded-3xl shadow mb-20"
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
            <PrimaryButton type="submit" className="w-full" isLoading={isSubmitting} disabled={isSubmitting}>
                Save
            </PrimaryButton>
        </form>
    );
};

export default ArticleForm;
