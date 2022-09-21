import {Environment} from "../Enums/Environment";
import {AppContentBaseRoutes} from "../Enums/AppRoutes";

const isCTFPathname = (pathname: string): boolean => {
    return pathname.startsWith(AppContentBaseRoutes.CTF);
}

export const buildFileUrlFromPathname = (pathname: string): URL => {
    if (pathname === '') {
        const url = `${Environment.CONTENT_BASE_URL}${Environment.CONTENT_DIRECTORY_INDEX_FILENAME}`;
        return new URL(url);
    } else if (!pathname.endsWith('.md')) {
        const pathnameNoTrailingSlash = pathname.endsWith('/')
            ? pathname.slice(0, pathname.length - 1)
            : pathname;
        if (isCTFPathname(pathname)) {
            const url = `${Environment.CONTENT_BASE_URL}${pathnameNoTrailingSlash}/${Environment.CTF_DIRECTORY_INDEX_FILENAME}`;
            return new URL(url);
        }
        const url = `${Environment.CONTENT_BASE_URL}${pathnameNoTrailingSlash}/${Environment.CONTENT_DIRECTORY_INDEX_FILENAME}`;
        return new URL(url);
    }
    const url = `${Environment.CONTENT_BASE_URL}${pathname}`;
    return new URL(url);
}
