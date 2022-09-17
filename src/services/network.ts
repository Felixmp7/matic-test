import envHandler from '@helpers/envHandler';
import axios from 'axios';

const network = axios.create({
    baseURL: envHandler.baseUrl,
});

export default network;
