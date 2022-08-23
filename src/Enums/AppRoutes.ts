type RoutesType = {
    Article: string,
    CTF: string,
    CTF_THM: string,
    CTF_HTB: string,
    CTF_OTW: string,
    CTF_STS: string,
    Tutorial: string,
}

export const AppContentBaseRoutes: RoutesType = Object.freeze({
    Article: `/article`,
    CTF: `/ctf`,
    CTF_THM: `/ctf/tryhackme`,
    CTF_HTB: `/ctf/hackthebox`,
    CTF_OTW: `/ctf/overthewire`,
    CTF_STS: `/ctf/smashthestack`,
    Tutorial: `/tutorial`,
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
    Landing: `/`,
});
