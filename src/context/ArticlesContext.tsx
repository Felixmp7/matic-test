import React, { createContext, useMemo, useState } from 'react';
import { ArticleFormSchema } from '@templates/LatestArticles/useArticlesForm';

type DefaultFormValues = ArticleFormSchema & {
    id: string,
}

export interface ArticleContextProps {
    defaultFormValues?: DefaultFormValues;
    setDefaultFormValues: React.Dispatch<DefaultFormValues | undefined>;
}

export const ArticleContext = createContext<ArticleContextProps>({
    defaultFormValues: undefined,
    setDefaultFormValues: () => null,
});

type Props = {
    children: React.ReactNode
};

const ArticlesContextProvider = ({ children }: Props) => {
    const [defaultFormValues, setDefaultFormValues] = useState<DefaultFormValues | undefined>();

    const values = useMemo(() => ({ defaultFormValues, setDefaultFormValues }), [defaultFormValues]);

    return (
        <ArticleContext.Provider value={values}>
            {children}
        </ArticleContext.Provider>
    );
};

export default ArticlesContextProvider;
