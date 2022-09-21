import React from "react";
import {
    IndexPage,
    PageHeader,
    PageHeadingWrapper,
    Articles,
    ArticleGroupWrapper,
    ArticleGroupHeader,
    ArticleLinkWrapper,
    ArticlesGroup,
    PageDescription
} from "./index.styles";
import {CTFIndexFile} from "../../../Types/CTFIndexFileType";
import M from "materialize-css";
import {sanitizeUrl} from "@braintree/sanitize-url";

type Props = {
    pageContent: CTFIndexFile,
}

export const CTFIndexViewer = ({
                                   pageContent
                               }: Props) => {
    React.useEffect(() => {
        M.AutoInit();
    });

    if (!pageContent) {
        return null;
    }
    return (
        <IndexPage>
            <PageHeadingWrapper>
                <PageHeader>{pageContent.header}</PageHeader>
                <PageDescription>
                    {pageContent.description}
                    <span>
                        This section contains writeups to one of the greatest hacking platforms:{' '}
                        <a
                            href={sanitizeUrl(pageContent.platformURL)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {pageContent.platformName}
                        </a>
                    </span>
                </PageDescription>
            </PageHeadingWrapper>
            <Articles className="collapsible">
                {
                    pageContent.content.map(c => (
                        <ArticleGroupWrapper key={c.groupHeader}>
                            <ArticleGroupHeader className="collapsible-header transparent">
                                {c.groupHeader}
                            </ArticleGroupHeader>
                            <div className="collapsible-body">
                                <ArticlesGroup>
                                    {c.articles.map(a => (
                                        <ArticleLinkWrapper>
                                            <a href={sanitizeUrl(a.url)}>{a.name}</a>
                                        </ArticleLinkWrapper>
                                    ))}
                                </ArticlesGroup>
                            </div>
                        </ArticleGroupWrapper>
                    ))
                }
            </Articles>
        </IndexPage>
    )

}
