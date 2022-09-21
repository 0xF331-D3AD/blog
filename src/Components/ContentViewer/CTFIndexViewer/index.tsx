import React from "react";
import {CTFIndexFile} from "../../../Types/CTFIndexFileType";

type Props = {
    content: string,
}

export const CTFIndexViewer = ({
                                content
                            }: Props) => {
    const data: CTFIndexFile = JSON.parse(content);
    return (
        <>
            {JSON.stringify(data, null, 2)}
        </>
    )

}
