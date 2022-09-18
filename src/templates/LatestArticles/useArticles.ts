import useSWR from 'swr';
import API from '@services/api';
import { useState } from 'react';
import { sortByDate } from '@helpers/dates';

const fetchArticles = () => API.public.getAllArticles();

const useArticles = () => {
    const [showForm, setShowForm] = useState(false);

    const { data: fetchResponse, isValidating, mutate } = useSWR('articles', fetchArticles, {
        revalidateOnFocus: false,
    });

    const articlesSorted = fetchResponse?.data && sortByDate(fetchResponse.data);

    const lastArticles = articlesSorted && articlesSorted.slice(0, 4);

    return {
        isLoading: isValidating,
        showForm,
        allArticles: articlesSorted,
        lastArticles,
        openArticlesForm: () => setShowForm(true),
        mutateLatestArticles: mutate,
    };
};

export default useArticles;
