export const Environment = Object.freeze({
    CONTENT_BASE_URL: process.env.REACT_APP_CONTENT_BASE_URL! || 'https://raw.githubusercontent.com/0xF331-D3AD/blog/master/Content/',
    CONTENT_DIRECTORY_INDEX_FILENAME: process.env.REACT_APP_CONTENT_DIRECTORY_INDEX_FILENAME! || 'index.md',
});
