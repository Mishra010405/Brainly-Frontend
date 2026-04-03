import axios from "axios";

export const Api = axios.create({
    baseURL: "http://localhost:3000",
});

export function setAuthToken(token: string) {
    Api.defaults.headers.common["authorization"] = Api.defaults.headers.common["authorization"] || "";
    const token_ = localStorage.getItem("token");
    if (token_) {
        Api.defaults.headers.common["authorization"] = token_;
    }
}