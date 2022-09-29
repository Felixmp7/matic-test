import { generalSuccessResponseCode, SWR_ARTICLES_KEY } from '@helpers/constants';
import API from '@services/api';
import { useState } from 'react';
import { mutate } from 'swr';
import Spinner from './Spinner';

const deleteArticle = async (articleId: string) => {
    try {
        const response = await API.public.deleteArticle(articleId);
        return response.statusCode === generalSuccessResponseCode;
    } catch (error) {
        return false;
    }
};

type Props = {
    articleId: string,
}

const DeleteArticle = ({ articleId }: Props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleDeleteArticle = async () => {
        setIsSubmitting(true);
        const fetchSucceded = await deleteArticle(articleId);
        if (fetchSucceded) {
            mutate(SWR_ARTICLES_KEY);
        }
        setIsSubmitting(false);
    };

    return (
        <button
            type="button"
            className="text-center text-primary-red"
            onClick={handleDeleteArticle}
        >
            {isSubmitting
                ? <Spinner className="w-2.5 h-2.5 dark:text-primary-gray fill-primary-cyan" />
                : 'Delete'}
        </button>
    );
};

export default DeleteArticle;
