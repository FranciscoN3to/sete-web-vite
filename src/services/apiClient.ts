/**
 * Instancia da api que só existe pois é necessário fazer tratamentos com interceptor ou com baseUrl.
 * Nesse caso, ele intercepta toda request e busca os token de autenticação do usuário.
 */

import axios, { AxiosInstance } from "axios";
import { cookie } from "../helpers/Cookie";

const envUrls = {
    api: import.meta.env.VITE_REACT_APP_API_URL || "",
};

type EnvOptions = keyof typeof envUrls;

type ApiInstance = AxiosInstance;

const getApiClient = (env?: EnvOptions): ApiInstance => {
    const api = axios.create({
        baseURL: envUrls[env || "api"],
    });
    api.interceptors.request.use((req) => {
        const info = cookie.get("@sete-web:info");
        if (info?.token) {
            req.headers["Authorization"] = info.token;
        }
        return req;
    });
    return api;
};

export { getApiClient };
export type { EnvOptions, ApiInstance };
