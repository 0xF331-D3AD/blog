export type CTFArticle = {
    name: string,
    url: string,
}

export type CTFDirectoryContent = {
    groupHeader: string,
    articles: Array<CTFArticle>
}

export type CTFIndexFile = {
    header: string,
    description: string,
    platformName: string,
    platformURL: string,
    content: Array<CTFDirectoryContent>
}
