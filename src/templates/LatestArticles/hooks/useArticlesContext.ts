import { ArticleContext } from '@context/ArticlesContext';
import { useContext } from 'react';

const useArticleContext = () => {
    const context = useContext(ArticleContext);
    if (context === undefined) {
        throw new Error('useArticleContext debe ser usado dentro de un Context');
    }
    return context;
};

export default useArticleContext;
