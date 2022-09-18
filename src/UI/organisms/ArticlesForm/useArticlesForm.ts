import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import API from '@services/api';
import { createSuccessResponseCode, generalSuccessResponseCode } from '@helpers/constants';
import { FormArticle_ReqT } from '@services/api/clients/public/interfaces';
import { useEffect } from 'react';
import useArticleContext from '../../../templates/LatestArticles/hooks/useArticlesContext';

const parseArticleData = (articleData: ArticleFormSchema):FormArticle_ReqT => ({
    author: articleData.author,
    title: articleData.blogTitle,
    content: articleData.blogContent,
});

const handleCreateNewArticle = async (newArticle: ArticleFormSchema) => {
    const newArticleParsed = parseArticleData(newArticle);
    try {
        const response = await API.public.createNewArticle(newArticleParsed);
        return response.statusCode === createSuccessResponseCode;
    } catch (error) {
        return false;
    }
};
const handleUpdateArticle = async (article: ArticleFormSchema, articleId: string) => {
    const articleParsed = parseArticleData(article);

    try {
        const response = await API.public.updateArticle(articleParsed, articleId);
        return response.statusCode === generalSuccessResponseCode;
    } catch (error) {
        return false;
    }
};

export type ArticleFormSchema = {
    author: string;
    blogTitle: string;
    blogContent: string;
};

const requiredFieldMessage = 'Required';

const defaultValues: ArticleFormSchema = {
    author: '',
    blogTitle: '',
    blogContent: '',
};

const validationSchema: yup.SchemaOf<ArticleFormSchema> = yup.object().shape({
    author: yup.string().required(requiredFieldMessage),
    blogTitle: yup.string().required(requiredFieldMessage),
    blogContent: yup.string().required(requiredFieldMessage),
});

const useArticlesForm = (mutateLatestArticles: () => void) => {
    const { defaultFormValues, setDefaultFormValues } = useArticleContext();

    const {
        register,
        reset,
        setValue,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
            isValid,
        },
    } = useForm<ArticleFormSchema>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (articleFormData: ArticleFormSchema) => {
        let fetchSucceded = false;
        if (defaultFormValues) {
            fetchSucceded = await handleUpdateArticle(articleFormData, defaultFormValues!.id);
        } else {
            fetchSucceded = await handleCreateNewArticle(articleFormData);
        }

        if (fetchSucceded) {
            reset();
            mutateLatestArticles();
            setDefaultFormValues(undefined);
        }
    };

    useEffect(() => {
        if (defaultFormValues) {
            setValue('author', defaultFormValues.author);
            setValue('blogTitle', defaultFormValues.blogTitle);
            setValue('blogContent', defaultFormValues.blogContent);
        }
    }, [defaultFormValues, setValue]);

    return {
        errors,
        isSubmitting,
        isValid,
        register,
        setValue,
        handleSubmit: handleSubmit(onSubmit),
    };
};

export default useArticlesForm;
