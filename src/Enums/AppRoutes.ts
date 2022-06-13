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

export const AppContentBaseRoutes: RoutesType = Object.freeze({
    Article: `${baseUrl}article`,
    CTF_THM: `${baseUrl}ctf/tryhackme`,
    CTF_HTB: `${baseUrl}ctf/hackthebox`,
    CTF_OTW: `${baseUrl}ctf/overthewire`,
    CTF_STS: `${baseUrl}ctf/smashthestack`,
    Tutorial: `${baseUrl}tutorial`,
});

const getBaseRoutesForRouter = (): RoutesType => {
    const out = {};
    for (const key of Object.keys(AppContentBaseRoutes)) {
        // @ts-ignore
        out[key] = `${AppContentBaseRoutes[key]}/*`;
    }
    return out as RoutesType;
}

export const AppContentBaseRoutesForRouter: RoutesType = Object.freeze(getBaseRoutesForRouter());

export const AppRoutes = Object.freeze({
   COMING_SOON: 'coming-soon',
   NOT_FOUND: 'not-found',
});
