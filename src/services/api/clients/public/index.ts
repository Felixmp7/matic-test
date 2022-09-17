import apiRoutes from '@services/api/apiRoutes';
import network from '@services/network';
import { CustomResponse } from '@types';
import { Article_ResT } from './interfaces';

const { publicRoutes } = apiRoutes;

const authApiMethods = {
    getAllArticles: async () => (await network.get<CustomResponse<Article_ResT>>(publicRoutes.getAllArticles)).data,
};

export default authApiMethods;
