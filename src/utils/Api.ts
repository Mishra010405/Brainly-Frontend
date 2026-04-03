import axios  from "axios";


export const Api = axios.create({
    baseURL : "http://localhost:3000",

});

export function setAuthToken(token: string) {
    Api.defaults.headers.common["Authorization"] = token;
}