import React from "react";
import {CTFIndexFile} from "../../../Types/CTFIndexFileType";

type Props = {
    content: CTFIndexFile,
}

export const CTFIndexViewer = ({
                                content
                            }: Props) => {
    if (!content) {
        return null;
    }
    return (
        <>
            {JSON.stringify(content, null, 2)}
        </>
    )

}
