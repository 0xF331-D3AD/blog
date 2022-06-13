import {Environment} from "../Enums/Environment";

export const buildFileUrlFromPathname = (pathname: string): URL => {
    const pathnameNoBaseLocation = pathname.replace(Environment.BASE_LOCATION, '');
    if (pathnameNoBaseLocation === ''){
        const url = `${Environment.CONTENT_BASE_URL}${Environment.CONTENT_DIRECTORY_INDEX_FILENAME}`;
        console.log(url);
        return new URL(url);
    } else if (!pathnameNoBaseLocation.endsWith('.md')) {
        const pathnameNoBaseLocationNoTrailingSlash = pathnameNoBaseLocation.endsWith('/')
            ? pathnameNoBaseLocation.slice(0, pathnameNoBaseLocation.length - 1)
            : pathnameNoBaseLocation;
        const url = `${Environment.CONTENT_BASE_URL}${pathnameNoBaseLocationNoTrailingSlash}/${Environment.CONTENT_DIRECTORY_INDEX_FILENAME}`;
        return new URL(url);
    }
    const url = `${Environment.CONTENT_BASE_URL}${pathnameNoBaseLocation}`;
    return new URL(url);
}
