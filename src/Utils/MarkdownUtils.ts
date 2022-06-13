import {Environment} from "../Enums/Environment";

export const buildFileUrlFromPathname = (pathname: string): URL => {
    const pathnameNoBaseLocation = pathname.replace(Environment.BASE_LOCATION, '');
    if (!pathnameNoBaseLocation.endsWith('.md')){
        const url = `${Environment.CONTENT_BASE_URL}${Environment.CONTENT_DIRECTORY_INDEX_FILENAME}`;
        return new URL(url);
    }
    const url = `${Environment.CONTENT_BASE_URL}${pathnameNoBaseLocation}`;
    return new URL(url);
}
