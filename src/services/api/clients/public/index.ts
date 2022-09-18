import apiRoutes from '@services/api/apiRoutes';
import network from '@services/network';
import { CustomResponse } from '@types';
import { Article, FormArticle_ReqT } from './interfaces';

const { publicRoutes } = apiRoutes;

const authApiMethods = {
    getAllArticles: async () => (await network.get<CustomResponse<Article[]>>(publicRoutes.articles)).data,
    createNewArticle: async (newArticle: FormArticle_ReqT) => (
        await network.post<CustomResponse<Article>>(publicRoutes.articles, newArticle)
    ).data,
    updateArticle: async (article: FormArticle_ReqT, articleId: string) => (
        await network.patch<CustomResponse<Article>>(`${publicRoutes.articles}/${articleId}`, article)
    ).data,
    deleteArticle: async (articleId: string) => (
        await network.delete<CustomResponse<Article>>(`${publicRoutes.articles}/${articleId}`)
    ).data,
};

export default authApiMethods;
