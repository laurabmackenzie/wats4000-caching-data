// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

    // TODO: Use your own APPID for OpenWeatherMap.org
    config.params.APPID = '8114896c57121d6a6ba29f1644e20eb5';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});