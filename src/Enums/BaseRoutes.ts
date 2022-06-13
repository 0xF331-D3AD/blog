import {Environment} from "./Environment";
import {stringify} from "querystring";

const baseUrl = Environment.BASE_LOCATION;

type RoutesType = {
    Article: string,
    CTF_THM: string,
    CTF_HTB: string,
    CTF_OTW: string,
    CTF_STS: string,
    Tutorial: string,
}

export const BaseRoutes: RoutesType = Object.freeze({
    Article: `${baseUrl}article/`,
    CTF_THM: `${baseUrl}ctf/tryhackme/`,
    CTF_HTB: `${baseUrl}ctf/hackthebox/`,
    CTF_OTW: `${baseUrl}ctf/overthewire/`,
    CTF_STS: `${baseUrl}ctf/smashthestack/`,
    Tutorial: `${baseUrl}tutorial/`,
});

const getBaseRoutesForRouter = (): RoutesType => {
    const out = {};
    for (const key of Object.keys(BaseRoutes)) {
        // @ts-ignore
        out[key] = `${BaseRoutes[key]}*`;
    }
    return out as RoutesType;
}

export const BaseRoutesForRouter: RoutesType = Object.freeze(getBaseRoutesForRouter());
