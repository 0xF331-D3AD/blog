import {Environment} from "../Enums/Environment";

export const buildFileUrlFromPathname = (pathname: string): URL => {
    if (pathname === '') {
        const url = `${Environment.CONTENT_BASE_URL}${Environment.CONTENT_DIRECTORY_INDEX_FILENAME}`;
        return new URL(url);
    } else if (!pathname.endsWith('.md')) {
        const pathnameNoTrailingSlash = pathname.endsWith('/')
            ? pathname.slice(0, pathname.length - 1)
            : pathname;
        const url = `${Environment.CONTENT_BASE_URL}${pathnameNoTrailingSlash}/${Environment.CONTENT_DIRECTORY_INDEX_FILENAME}`;
        return new URL(url);
    }
    const url = `${Environment.CONTENT_BASE_URL}${pathname}`;
    return new URL(url);
}
