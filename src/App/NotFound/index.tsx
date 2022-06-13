import React from "react";
import {NotFoundContent, NotFoundIcon, NotFoundText, NotFoundWrapper} from "./index.styles";

export const NotFound = () => {
    return (
        <NotFoundWrapper>
            <NotFoundContent>
                <NotFoundIcon/>
                <NotFoundText>
                    Ooops! Looks like you've landed on page that doesn't exist!
                </NotFoundText>
            </NotFoundContent>
        </NotFoundWrapper>
    )
}
