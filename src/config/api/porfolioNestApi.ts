import { STAGE,API_URL_IOS,API_URL_ANDROID ,API_URL as  PROD_URL } from '@env';
import axios from 'axios';
import { Platform } from 'react-native';
import { StorageAdapter } from '../adapters/storage-adapter';

export const API_URL = (STAGE === 'pro') ? PROD_URL : Platform.OS === 'ios' ? API_URL_IOS : API_URL_ANDROID;
const PorfolioNestApi = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
});

PorfolioNestApi.interceptors.request.use(
    async (config) => {
        const token = await StorageAdapter.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
export {PorfolioNestApi};
