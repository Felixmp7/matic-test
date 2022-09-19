import apiRoutes from '@services/api/apiRoutes';
import network from '@services/network';
import { CustomResponse } from '@types';
import { Article_BM, FormArticle_ReqT } from './interfaces';

const { publicRoutes } = apiRoutes;

const authApiMethods = {
    getAllArticles: async () => (await network.get<CustomResponse<Article_BM[]>>(publicRoutes.articles)).data,
    createNewArticle: async (newArticle: FormArticle_ReqT) => (
        await network.post<CustomResponse<Article_BM>>(publicRoutes.articles, newArticle)
    ).data,
    updateArticle: async (article: FormArticle_ReqT, articleId: string) => (
        await network.patch<CustomResponse<Article_BM>>(`${publicRoutes.articles}/${articleId}`, article)
    ).data,
    deleteArticle: async (articleId: string) => (
        await network.delete<CustomResponse<Article_BM>>(`${publicRoutes.articles}/${articleId}`)
    ).data,
};

export default authApiMethods;
