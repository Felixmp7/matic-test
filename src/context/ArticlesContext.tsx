import { ArticleFormSchema } from '@templates/LatestArticles/useArticlesForm';
import React, { createContext, useMemo, useState } from 'react';

export interface ArticleContextProps {
    defaultFormValues?: ArticleFormSchema;
    setDefaultFormValues: React.Dispatch<ArticleFormSchema>;
}

export const ArticleContext = createContext<ArticleContextProps>({
    defaultFormValues: undefined,
    setDefaultFormValues: () => null,
});

type Props = {
    children: React.ReactNode
};

const ArticlesContextProvider = ({ children }: Props) => {
    const [defaultFormValues, setDefaultFormValues] = useState<ArticleFormSchema | undefined>();

    const values = useMemo(() => ({ defaultFormValues, setDefaultFormValues }), [defaultFormValues, setDefaultFormValues]);

    return (
        <ArticleContext.Provider value={values}>
            {children}
        </ArticleContext.Provider>
    );
};

export default ArticlesContextProvider;
