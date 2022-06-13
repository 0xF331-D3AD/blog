import axios, {AxiosInstance} from "axios";
import {Environment} from "../Enums/Environment";

const createDefaultAxios = (): AxiosInstance => {
    return axios.create({
        baseURL: Environment.CONTENT_BASE_URL,
        method: "GET",
        timeout: 10_000,
    })
}

export const getMarkdown = async (url: string) => {
    const axiosInstance = createDefaultAxios();
    const result = await axiosInstance.get(url);
    const { data } = result;
    return data;
}
