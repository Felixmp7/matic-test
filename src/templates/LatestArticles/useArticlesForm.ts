import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import API from '@services/api';
import { createSuccessResponseCode } from '@helpers/constants';
import { FormArticle_ReqT } from '@services/api/clients/public/interfaces';
import useArticleContext from './hooks/useArticlesContext';

const handleCreateNewArticle = async (newArticle: ArticleFormSchema) => {
    const newArticleParsed: FormArticle_ReqT = {
        author: newArticle.author,
        title: newArticle.blogTitle,
        content: newArticle.blogContent,
    };
    try {
        const response = await API.public.createNewArticle(newArticleParsed);
        return response.statusCode === createSuccessResponseCode;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export type ArticleFormSchema = {
    author: string;
    blogTitle: string;
    blogContent: string;
};

const requiredFieldMessage = 'Required';

const getDefaultValues = (defaultValues?: ArticleFormSchema): ArticleFormSchema => ({
    author: defaultValues?.author || '',
    blogTitle: defaultValues?.blogTitle || '',
    blogContent: defaultValues?.blogContent || '',
});

const useArticlesForm = (mutateLatestArticles: () => void) => {
    const { defaultFormValues } = useArticleContext();

    const validationSchema: yup.SchemaOf<ArticleFormSchema> = yup.object().shape({
        author: yup.string().required(requiredFieldMessage),
        blogTitle: yup.string().required(requiredFieldMessage),
        blogContent: yup.string().required(requiredFieldMessage),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
            isValid,
        },
    } = useForm<ArticleFormSchema>({
        defaultValues: getDefaultValues(defaultFormValues),
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (articleFormData: ArticleFormSchema) => {
        if (defaultFormValues) {
            console.log('isEditing');
        } else {
            const isFetchSucceded = await handleCreateNewArticle(articleFormData);
            if (isFetchSucceded) {
                reset();
                mutateLatestArticles();
            }
        }
    };

    return {
        errors,
        isSubmitting,
        isValid,
        register,
        handleSubmit: handleSubmit(onSubmit),
    };
};

export default useArticlesForm;
