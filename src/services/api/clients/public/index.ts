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
};

export default authApiMethods;
